import {Router} from 'express';
import Collection from '../models/collection.js';

const collectionRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Collection
 *   description: NFT Collections
 */

/**
 * @swagger
 * /collection:
 *   get:
 *     summary: Get all collections
 *     tags: [Collection]
 *     responses:
 *       200:
 *         description: List of NFT collections
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 665c1fcb7c6d9c00125d17f4
 *                       name:
 *                         type: string
 *                         example: "Rare Apes"
 *                       imgUri:
 *                         type: string
 *                         example: "https://example.com/image.png"
 *                       creator:
 *                         type: string
 *                         example: "665c1fcb7c6d9c00125d17f1"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *       500:
 *         description: Internal Server Error
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