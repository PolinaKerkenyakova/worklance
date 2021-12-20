import express from 'express';

import { getOffersByIds } from '../services/offer.js';
import { getUserById } from '../services/user.js';

const router = express.Router();
router.get('/:userId/profile', async (req, res) => {
    const id = req.params.userId;
    const user = await getUserById(id);
    const offers = await getOffersByIds(user.createdOffers);

    res.json({ user, offers });
});

router.get('/:userId', async (req, res) => {
    const id = req.params.userId;
    const user = await getUserById(id);
    
    res.json(user);
});


export default router;