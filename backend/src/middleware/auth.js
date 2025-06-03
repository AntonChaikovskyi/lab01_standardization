import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res.status(401).json({ error: 'Необхідна авторизація' });
	}
	
	const token = authHeader.split(' ')[1];
	
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = payload.userId;
		next();
	} catch (err) {
		console.error('Помилка верифікації токена:', err);
		return res.status(401).json({ error: 'something went wrong' });
	}
};
