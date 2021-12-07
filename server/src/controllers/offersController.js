import express from 'express';
import { createOffer, getAllOffers } from '../services/offer.js';

const router = express.Router();

router.post('/', async (req, res) => {

    const offer = {
        title: req.body.title,
        category: req.body.category,
        city: req.body.city,
        price: req.body.price,
        description: req.body.description,
        keywords: req.body.keywords,
        image: req.body.image,
        creator: req.body.creator
    }

    await createOffer(offer);
});

router.get('/', async (req, res) => {
    const offers = await getAllOffers();
    res.json(offers);
});

router.get('/:offerId', async (req, res) => {

});

router.put('/:offerId', async (req, res) => {

});

router.delete('/:offerId', async (req, res) => {

});

export default router;