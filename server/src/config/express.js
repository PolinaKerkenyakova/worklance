import express from 'express';
import cors from 'cors';

import cookieParser from 'cookie-parser';
import storageMiddleware from '../middlewares/storage.js';

const expressConfig = (app) => {
    app.use(cookieParser());
    app.use(cors());
    // app.use(storageMiddleware());
}

export default expressConfig;