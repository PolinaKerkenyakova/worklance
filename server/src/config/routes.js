import authController from '../controllers/authController.js';

const routeConfig = (app) => {
    app.use('/auth', authController);
}

export default routeConfig;