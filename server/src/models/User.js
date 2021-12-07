import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    hashedPassword: { type: String },
    profileImage: { type: String }
});

export default mongoose.model('User', schema);