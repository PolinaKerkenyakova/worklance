import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    email: { type: String },
    hashedPassword: { type: String }
});

export default mongoose.model('User', schema);