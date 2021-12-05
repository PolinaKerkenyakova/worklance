import express from 'express';

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log(req.body);
});


router.post('/login', async (req, res) => {

});


router.get('/logout', async (req, res) => {
   
});

export default router;