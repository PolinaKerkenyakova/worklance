import Offer from "../models/Offer.js"
import User from "../models/User.js"

export const createOffer = async (offerData) => {

    let offer = await new Offer(offerData);
    await offer.save();

    const user = await User.findById(offerData.creator);
    user.createdOffers.push(offer._id);
    await user.save();

    return offer;
}

export const getAllOffers = async () => {
    const offers = await Offer.find({});

    return offers;
}

export const getOfferById = async (id) => {
    const offer = await Offer.findById(id).lean();

    return offer;
}

export async function getOffersByIds(offersIds) {
    const offers = await Offer.find({ '_id': { $in: offersIds } }).lean();
    
    return offers;
}