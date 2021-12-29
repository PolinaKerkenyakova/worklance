import express from 'express';
import path from 'path';

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

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
        });
    }

    app.listen(PORT, () => {
        console.log(`App started at http://localhost:${PORT}`);
    });
}
