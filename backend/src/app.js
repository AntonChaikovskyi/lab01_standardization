import express from "express"
import {PORT} from './config/env.js';
import connectToDataBase from './database/mongodb.js';

const app = express();
const APP_PORT = PORT || 3000;

app.use(express.json());

app.listen(Number(APP_PORT), '0.0.0.0', async () => {
	console.log(`App listening on http://localhost:${APP_PORT}`);
	await connectToDataBase();
})