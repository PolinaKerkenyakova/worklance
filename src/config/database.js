import mongoose from 'mongoose';

import { DB_CONNECTION_STRING } from './contants.js';

const databaseConfig = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = mongoose.connection;

        db.on('error', function (err) {
            console.log('Connection error:', err);
            reject(err);
        });

        db.once('open', function () {
            console.log('Database ready!');
            resolve();
        });
    });
}

export default databaseConfig;