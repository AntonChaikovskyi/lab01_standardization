import express from "express"
import {PORT} from './config/env.js';
import connectToDataBase from './database/mongodb.js';
import collectionRouter from './routes/collection.js';
import cors from 'cors';
import nftRouter from './routes/nft.js';
import userRouter from './routes/user.js';

const app = express();
const APP_PORT = PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/collection', collectionRouter)
app.use('/nft', nftRouter)
app.use('/user', userRouter)

app.listen(Number(APP_PORT),  async () => {
	console.log(`App listening on http://localhost:${APP_PORT}`);
	await connectToDataBase();
})