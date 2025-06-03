import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	username: { type: String, required: true },
	purchasedNfts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Nft',
		}
	]
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);
