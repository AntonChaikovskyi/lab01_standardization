import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
	name: { type: String, required: true },
	imgUri: { type: String },
	creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.models.Collection || mongoose.model('Collection', collectionSchema);
