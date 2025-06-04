import {Router} from 'express';
import Collection from '../models/collection.js';

const collectionRouter = Router();

/**
 * @api {get} /api/collections Get all collections
 * @apiName GetCollections
 * @apiGroup Collections
 * @apiSuccess {Object[]} data List of NFT collections
 * @apiError (500) InternalServerError Internal Server Error
 */
collectionRouter.get('/', async (req, res) => {
	try{
		const collections = await Collection.find({});
		res.status(200).json({data: collections});
	}catch(err){
		console.log(err);
		res.status(500).send({error: 'Internal Server Error'});
	}
})

export default collectionRouter