import express from 'express';

import { PORT } from './config/contants.js';

start();

async function start() {
    const app = express();


    app.listen(PORT, () => {
        console.log(`App started at http://localhost:${PORT}`);
    })
}
