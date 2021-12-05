// import cors from 'cors'; // library
import cors from '../middlewares/cors.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import storageMiddleware from '../middlewares/storage.js';
import authMiddleware from '../middlewares/auth.js';

const expressConfig = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(cors());
    app.use(storageMiddleware());
    app.use(authMiddleware());
}

export default expressConfig;