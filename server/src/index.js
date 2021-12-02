import express from 'express';

import { PORT } from './config/contants.js';
import databaseConfig from './config/database.js';
import expressConfig from './config/express.js';

start();

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);

    app.listen(PORT, () => {
        console.log(`App started at http://localhost:${PORT}`);
    });
}
