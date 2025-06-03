import mongoose from 'mongoose';

const nftSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	imgUri: { type: String },
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	collection: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }
}, { timestamps: true });

export default mongoose.models.Nft || mongoose.model('Nft', nftSchema);
