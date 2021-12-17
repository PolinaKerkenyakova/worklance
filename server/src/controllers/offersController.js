import express from 'express';
import { createOffer, getAllOffers, getOfferById, updateOffer } from '../services/offer.js';

const router = express.Router();

router.post('/', async (req, res) => {

    const offer = {
        title: req.body.title.trim(),
        category: req.body.category.trim(),
        city: req.body.city.trim(),
        price: req.body.price.trim(),
        description: req.body.description.trim(),
        keywords: req.body.keywords.trim(),
        image: req.body.image.trim(),
        creator: req.body.creator.trim()
    }

    if (offer.title && offer.category && offer.city && offer.price && offer.description && offer.keywords && offer.image) {

    await createOffer(offer);
    }
});

router.get('/', async (req, res) => {
    const offers = await getAllOffers();
    res.json(offers);
});

router.get('/:offerId', async (req, res) => {
    const id = req.params.offerId;
    const offer = await getOfferById(id);
    res.json(offer);
});

router.put('/:offerId', async (req, res) => {

    const offerId = req.params.offerId;
    const offerData = {
        title: req.body.title.trim(),
        category: req.body.category.trim(),
        city: req.body.city.trim(),
        price: req.body.price.trim(),
        description: req.body.description.trim(),
        keywords: req.body.keywords.trim(),
        image: req.body.image.trim(),
        creator: req.body.creator.trim()
    }

    if (offerData.title && offerData.category && offerData.city && offerData.price && offerData.description && offerData.keywords && offerData.image) {

        const offer = await updateOffer(offerId, offerData);
        res.json(offer);
    }
});

router.delete('/:offerId', async (req, res) => {

});


export default router;