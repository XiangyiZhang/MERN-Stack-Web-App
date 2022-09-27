import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const ROUNDS = 10;
const SECRET = 'quohoo_secret';

export const createUser = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const hash = await bcrypt.hash(password, ROUNDS);

    const newUser = new User({username, hash});
    try{
        await newUser.save();
        res.status(201).json({
            user: newUser,
            token: generateToken(newUser),
        });
    }catch(error){
        res.status(500).json({message:error});
    }
}

export const verifyUser = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    try {
        const oldUser = await User.findOne({ username });
    
        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
    
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
    
        const token = generateToken(oldUser);
    
        res.status(200).json({ user: oldUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};


const generateToken = (user) => {
    return jwt.sign({data: user}, SECRET, {expiresIn: '24h'});
}
