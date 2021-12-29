import authController from '../controllers/authController.js';
import offersController from '../controllers/offersController.js';
import usersController from '../controllers/usersController.js';

const routeConfig = (app) => {
    app.use('/auth', authController);
    app.use('/offers', offersController);
    app.use('/users', usersController);
}

export default routeConfig;