import {Router} from 'express';
import Nft from '../models/nft.js';
import {authMiddleware} from '../middleware/auth.js';
import User from '../models/user.js';

const nftRouter = Router();

/**
 * @api {get} /api/nfts Get all NFTs
 * @apiName GetNFTs
 * @apiGroup NFTs
 * @apiSuccess {Object[]} data List of NFTs
 * @apiError (500) InternalServerError Internal Server Error
 */

nftRouter.get('/', async (req, res) => {
	try{
		const nft = await Nft.find({});
		res.status(200).json({data: nft});
	}catch(err){
		console.log(err);
		res.status(500).send({error: 'Internal Server Error'});
	}
})


/**
 * @api {get} /api/nfts/owned Get user's owned NFTs
 * @apiName GetOwnedNFTs
 * @apiGroup NFTs
 * @apiHeader {String} Authorization Bearer token.
 * @apiSuccess {Object[]} data List of NFTs owned by the user
 * @apiError (401) Unauthorized Missing or invalid token
 * @apiError (500) InternalServerError Internal Server Error
 */
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


/**
 * @api {get} /api/nfts/:id Get NFT by ID
 * @apiName GetNFTById
 * @apiGroup NFTs
 * @apiParam {String} id NFT unique ID
 * @apiSuccess {Object} data NFT details
 * @apiError (404) NotFound NFT not found
 * @apiError (500) InternalServerError Internal Server Error
 */
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

/**
 * @api {post} /api/nfts/:id/purchase Purchase NFT
 * @apiName PurchaseNFT
 * @apiGroup NFTs
 * @apiHeader {String} Authorization Bearer token.
 * @apiParam {String} id NFT unique ID
 * @apiSuccess {String} message NFT successfully purchased
 * @apiSuccess {Object[]} purchasedNfts List of purchased NFT IDs
 * @apiError (400) AlreadyPurchased NFT already purchased
 * @apiError (404) NotFound NFT or user not found
 * @apiError (500) InternalServerError Internal Server Error
 */
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