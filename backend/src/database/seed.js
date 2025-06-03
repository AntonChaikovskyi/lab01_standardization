import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/user.js';
import Nft from '../models/nft.js';
import Purchase from '../models/purchase.js';
import {MONGODB_URI} from '../config/env.js';
import Collection from '../models/collection.js';

dotenv.config();

const seed = async () => {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log('MongoDB connected');
		
		await Promise.all([
			User.deleteMany(),
			Collection.deleteMany(),
			Nft.deleteMany(),
			Purchase.deleteMany()
		]);
		
		const [user1, user2] = await User.create([
			{ email: 'alice@example.com', password: '123456', username: 'alice' },
			{ email: 'bob@example.com', password: '123456', username: 'bob' }
		]);
		
		const collection = await Collection.create({
			name: 'Crypto Art',
			imgUri: 'https://play-lh.googleusercontent.com/FyJTR8y2ZWDaVfja1yb9L06xMohcHA0sSp7-pVWbFI7fZ8jFBHmUqQ5sJow23E5Z1nVe=w240-h480-rw',
			creator: user1._id
		});
		
		const nft1 = await Nft.create({
			name: 'Cool NFT #1',
			price: 1.5,
			imgUri: 'https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w1024_r0.9975262832405689_fpx44.98_fpy48.86.jpg',
			owner: user2._id,
			creator: user1._id,
			collection: collection._id
		});
		
		const nft2 = await Nft.create({
			name: 'Cool NFT #2',
			price: 2.0,
			imgUri: 'https://i.pinimg.com/736x/93/8e/b4/938eb42b1dd3cc2355dc1d5efebad7d4.jpg',
			owner: user1._id,
			creator: user1._id,
			collection: collection._id
		});
		const nft3 = await Nft.create({
			name: 'Bored Ape',
			price: 2.0,
			imgUri: 'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
			owner: user1._id,
			creator: user1._id,
			collection: collection._id
		});
		
		await Purchase.create({
			buyer: user2._id,
			nft: nft1._id,
			priceAtPurchase: 1.5
		});
		
		console.log('✅ success');
		process.exit(0);
	} catch (error) {
		console.error('❌ error', error);
		process.exit(1);
	}
};

seed();
