import express from 'express';

import cookieParser from 'cookie-parser';
import storageMiddleware from '../middlewares/storage.js';

const expressConfig = (app) => {
    app.use(cookieParser());
    // app.use(storageMiddleware());
}

export default expressConfig;