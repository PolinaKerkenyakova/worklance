import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { TOKEN_SECRET, COOKIE_NAME } from '../config/contants.js';
import { createUser, getUserByEmail } from '../services/user.js';

const auth = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            async register(email, password) {
                const {user, token} = await register(email, password);
                res.cookie(COOKIE_NAME, token);
                return {
                    authToken: token,
                    _id: user._id,
                    email: user.email,
                }
            },
            async login(email, password) {
                const {user, token} = await login(email, password);
                res.cookie(COOKIE_NAME, token);
                return {
                    authToken: token,
                    _id: user._id,
                    email: user.email,
                }
            },
            logout() {
                res.clearCookie(COOKIE_NAME);
            }
        }

        next();
    }
};

async function register(email, password) {

    const existing = await getUserByEmail(email);

    if (existing) {
        throw new Error('Email is taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser(email, hashedPassword);
    const token = generateToken(user);
    return {user, token}
}

async function login(email, password) {
    const user = await getUserByEmail(email);

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

    const token = generateToken(user);
    return {user, token}
}


function generateToken(userData) {

    return jwt.sign({
        _id: userData._id,
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
            // res.redirect('/auth/login');
            return false;
        }
    }

    return true;
}

export default auth;