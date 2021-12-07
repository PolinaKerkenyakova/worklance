import authController from '../controllers/authController.js';
import offersController from '../controllers/offersController.js';

const routeConfig = (app) => {
    app.use('/auth', authController);
    app.use('/offers', offersController);
}

export default routeConfig;