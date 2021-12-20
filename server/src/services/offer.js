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

export const getAllOffers = async (category) => {
    let offers;

    switch (category) {
        case 'See All':
            offers = await Offer.find({});
            break;
        case 'Digital Services':
            offers = await Offer.find({ 'category': 'Digital Services' });
            break;
        case 'Repair and Construction':
            offers = await Offer.find({ 'category': 'Repair and Construction' });
            break;
        case 'Craftsmen':
            offers = await Offer.find({ 'category': 'Craftsmen' });
            break;
        case 'Beauty':
            offers = await Offer.find({ 'category': 'Beauty' });
            break;
        case 'Health':
            offers = await Offer.find({ 'category': 'Health' });
            break;
        case 'Educational and Social Activities':
            offers = await Offer.find({ 'category': 'Educational and Social Activities' });
            break;
        case 'Auto Services':
            offers = await Offer.find({ 'category': 'Auto Services' });
            break;
        case 'Professional Services':
            offers = await Offer.find({ 'category': 'Professional Services' });
            break;
        default:
            let keyword = new RegExp(category)
            offers = await Offer.find({ keywords: { $regex : keyword } } );

    }
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

export async function delOffer(id) {
    await Offer.findByIdAndDelete(id);
}

export async function addComment(id, comment) {
    const offer = await Offer.findById(id);

    offer.comments.push(comment);
    await offer.save();

    return offer;
}