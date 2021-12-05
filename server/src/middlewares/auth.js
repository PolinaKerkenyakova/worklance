import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { TOKEN_SECRET, COOKIE_NAME } from '../config/contants.js';
import { createUser, getUserByEmail } from '../services/user.js';

const auth = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            async register(firstName, lastName, email, password) {
                const token = await register(firstName, lastName, email, password);
                res.cookie(COOKIE_NAME, token);
            },
            async login(email, password) {
                const token = await login(email, password);
                res.cookie(COOKIE_NAME, token);
            },
            logout() {
                res.clearCookie(COOKIE_NAME);
            }
        }

        next();
    }
};

async function register(firstName, lastName, email, password) {
    // TODO adapt parameters to project requirements
    // TODO extra validations

    const existing = await getUserByEmail(email);

    if (existing) {
        throw new Error('Email is taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser(firstName, lastName, email, hashedPassword);

    return generateToken(user);
}

async function login(email, password) {
    const user = await getUserByUsername(email);

    if (!user) {
        const err = new Error('No such user');
        err.type = 'credential';
        throw err;
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!hasMatch) {
        const err = new Error('Incorrect password');
        err.type = 'credential';
        throw err;
    }

    return generateToken(user);
}


function generateToken(userData) {

    return jwt.sign({
        _id: userData._id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
    }, TOKEN_SECRET);

}

function parseToken(req, res) {
    const token = req.cookies[COOKIE_NAME];

    if (token) {
        try {
            const userData = jwt.verify(token, TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData;

        } catch (err) {
            res.clearCookie(COOKIE_NAME);
            res.redirect('/auth/login');

            return false;
        }
    }

    return true;
}

export default auth;