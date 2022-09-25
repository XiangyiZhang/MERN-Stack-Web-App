import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const ROUNDS = 10;
const SECRET = 'quohoo_secret';

export const createUser = async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, ROUNDS);

    const newUser = new User({username, hash});
    try{
        await newUser.save();
        res.status(201).json(generateToken(newUser));
    }catch(error){
        res.status(500).json({message:error});
    }
}

export const verifyUser = async (req, res) => {
    const { username, password } = req.body;
    try{
        const user = User.findOne( username );
        if(user){
            const result = await bcrypt.compare(password, user.password);
            if(result){
                res.status(200).json({token: generateToken(user)});
            }else{
                res.status(403).json({message: 'Password does not match.'});
            }
        }else{
            res.status(403.).json({message: 'Username not found.'});
        }
    }catch(error){
        res.status(500).json(error);
    }
}

const generateToken = (user) => {
    return jwt.sign({data: user}, SECRET, {expiresIn: '24h'});
}
