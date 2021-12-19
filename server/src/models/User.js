import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    hashedPassword: { type: String },
    profileImage: { type: String },
    createdOffers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Offer'}],
    stars: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

export default mongoose.model('User', schema);