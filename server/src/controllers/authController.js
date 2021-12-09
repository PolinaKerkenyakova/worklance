import express from 'express';

const router = express.Router();

router.post('/register', async (req, res) => {
    const response = await req.auth.register(req.body.name, req.body.email, req.body.password, req.body.profileImage);
    
    res.status(201);
    res.json({
        _id: response._id,
        email: response.email,
        name: response.name,
        authToken: response.authToken
    });
});


router.post('/login', async (req, res) => {
    const response = await req.auth.login(req.body.email, req.body.password);
    res.status(200);

    res.json({
        _id: response._id,
        email: response.email,
        name: response.name,
        authToken: response.authToken
    });
});


router.get('/logout', async (req, res) => {
    await req.auth.logout();
    res.status(200);
    res.json();
});

export default router;