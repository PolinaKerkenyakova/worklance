import User from '../models/User.js';

export async function createUser(username, hashedPassword) {
    // TODO adapt properties to project requirements
    const user = new User({
        username,
        hashedPassword
    });

    await user.save();

    return user;
}

export async function getUserByEmail(email) {
    // const pattern = new RegExp(`^${username}$`, 'i')
    // const user = await User.findOne({ username: { $regex: pattern } })

    // return user;
    
    //Write a function to get user by email
}

export async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i')
    const user = await User.findOne({ username: { $regex: pattern } })

    return user;
}

// TODO add function for finding user by other properties, as specific in the project requirements e.g finding user by email