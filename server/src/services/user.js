import User from '../models/User.js';

export async function createUser(email, hashedPassword) {
    const user = new User({
        email,
        hashedPassword
    });

    await user.save();

    return user;
}

export async function getUserByEmail(email) {
    const user = await User.findOne({ email: email })

    return user;
}
