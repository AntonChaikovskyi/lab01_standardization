import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
	buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	nft: { type: mongoose.Schema.Types.ObjectId, ref: 'Nft', required: true },
	purchaseDate: { type: Date, default: Date.now },
	priceAtPurchase: { type: Number, required: true }
});

export default mongoose.models.Purchase || mongoose.model('Purchase', purchaseSchema);
