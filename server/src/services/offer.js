import Offer from "../models/Offer.js"

export const createOffer = async (offerData) => {

    let offer = await new Offer(offerData);
    await offer.save();

    return offer;
}

export const getAllOffers = async () => {
    const offers = await Offer.find({});
    
    return offers;
}