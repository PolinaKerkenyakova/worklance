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
    const offersData = await Offer.find({ '_id': { $in: offersIds } }).lean();

    const offers = offersData.map(o => {
        return { _id: o._id, title: o.title, image: o.image, category: o.category }
    });

    return offers;
}

export async function updateOffer(id, offerData) {
    const offer = await Offer.findById(id);
    offer.title = offerData.title;
    offer.category = offerData.category;
    offer.city = offerData.city;
    offer.price = offerData.price;
    offer.description = offerData.description;
    offer.keywords = offerData.keywords;
    offer.image = offerData.image;

    await offer.save();
    return offer;
}