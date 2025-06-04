import {Router} from 'express';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";


const userRouter = Router();

/**
 * @api {get} /api/users Get all users
 * @apiName GetUsers
 * @apiGroup Users
 * @apiSuccess {Object[]} data List of users
 * @apiError (500) InternalServerError Internal Server Error
 */

userRouter.get('/', async (req, res) => {
	try{
		const users = await User.find({});
		res.status(200).json({data: users});
	}catch(err){
		console.log(err);
		res.status(500).send({error: 'Internal Server Error'});
	}
})

/**
 * @api {post} /api/users/signup User signup
 * @apiName Signup
 * @apiGroup Users
 * @apiBody {String} email User email
 * @apiBody {String} password User password
 * @apiBody {String} username Display name
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} user Created user info
 * @apiSuccess {String} token JWT token
 * @apiError (400) UserExists User already exists
 * @apiError (500) InternalServerError Internal Server Error
 */
userRouter.post('/signup', async (req, res) => {
	try {
		const { email, password, username } = req.body;
		console.log(email, password, username);
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ error: 'user already exists' });
		}
		
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		
		const newUser = new User({
			email,
			password: hashedPassword,
			username,
		});
		await newUser.save();
		
		const payload = { userId: newUser._id };
		const token = jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
		);
		
		res.status(201).json({
			message: 'success signup',
			user: {
				id: newUser._id,
				email: newUser.email,
				username: newUser.username,
			},
			token,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});


/**
 * @api {post} /api/users/signin User signin
 * @apiName Signin
 * @apiGroup Users
 * @apiBody {String} email User email
 * @apiBody {String} password User password
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} user User info
 * @apiSuccess {String} token JWT token
 * @apiError (400) InvalidCredentials Invalid email or password
 * @apiError (500) InternalServerError Internal Server Error
 */
userRouter.post('/signin', async (req, res) => {
	try {
		const { email, password } = req.body;
		
		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.status(400).json({ error: 'email or password are uncorrected' });
		}
		
		const isMatch = await bcrypt.compare(password, existingUser.password);
		if (!isMatch) {
			return res.status(400).json({ error: 'email or password are uncorrected' });
		}
		
		const payload = { userId: existingUser._id };
		const token = jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
		);
		
		res.status(200).json({
			message: 'success sign in',
			user: {
				id: existingUser._id,
				email: existingUser.email,
				username: existingUser.username,
			},
			token,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});


export default userRouter