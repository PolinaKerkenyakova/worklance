import express from 'express';

import { PORT } from './config/contants.js';
import databaseConfig from './config/database.js';
import expressConfig from './config/express.js';
import routeConfig from './config/routes.js';

start();

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routeConfig(app);

    app.listen(PORT, () => {
        console.log(`App started at http://localhost:${PORT}`);
    });
}
