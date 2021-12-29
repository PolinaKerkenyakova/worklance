import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: { type: String },
    category: { type: String },
    city: { type: String },
    price: { type: String },
    description: { type: String },
    keywords: { type: String },
    image: { type: String },
    creator: {type: mongoose.Types.ObjectId, ref: 'User'},
    comments: []
});

export default mongoose.model('Offer', schema);