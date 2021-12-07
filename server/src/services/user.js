import User from '../models/User.js';

export async function createUser(name, email, hashedPassword, profileImage) {
    const user = new User({
        name,
        email,
        hashedPassword,
        profileImage
    });

    await user.save();

    return user;
}

export async function getUserByEmail(email) {
    const user = await User.findOne({ email: email })

    return user;
}
