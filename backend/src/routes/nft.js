import {Router} from 'express';
import Nft from '../models/nft.js';
import {authMiddleware} from '../middleware/auth.js';
import User from '../models/user.js';

const nftRouter = Router();

nftRouter.get('/', async (req, res) => {
	try{
		const nft = await Nft.find({});
		res.status(200).json({data: nft});
	}catch(err){
		console.log(err);
		res.status(500).send({error: 'Internal Server Error'});
	}
})


nftRouter.get('/owned', authMiddleware, async (req, res) => {
	try {
		const userId = req.userId;
		
		const user = await User.findById(userId).populate({
			path: 'purchasedNfts',
			model: 'Nft',
			select: '_id name price imgUri owner creator collection createdAt updatedAt'
		});
		
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		
		const ownedNfts = user.purchasedNfts || [];
		return res.status(200).json({ data: ownedNfts });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: 'Internal Server Error' });
	}
});

nftRouter.get('/:id', async (req, res) => {
	try {
		const nft = await Nft.findById(req.params.id);
		if (!nft) {
			return res.status(404).json({ error: 'NFT not found' });
		}
		res.status(200).json({ data: nft });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});


nftRouter.post('/:id/purchase', authMiddleware, async (req, res) => {
	try {
		const nftId = req.params.id;
		const userId = req.userId;
		const nft = await Nft.findById(nftId);
		if (!nft) {
			return res.status(404).json({ error: 'No NFT found' });
		}
		
		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		
		const alreadyPurchased = user.purchasedNfts.some(
			(ownedId) => ownedId.toString() === nftId
		);
		if (alreadyPurchased) {
			return res.status(400).json({ error: 'You have already purchased this NFT' });
		}
		
		user.purchasedNfts.push(nftId);
		await user.save();
		
		return res.status(200).json({
			message: 'NFT successfully purchased',
			purchasedNfts: user.purchasedNfts,
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: 'Internal Server Error' });
	}
});


export default nftRouter