import Answer from '../models/answer.js';

export const getAllAnswers = async (req, res) => {
    console.log('try get');
    try{
        const allAnswers = await Answer.find();
        res.status(200).json(allAnswers);
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const createAnswer = async (req, res) => {
    const { content } = req.body;
    const newAnswer = new Answer({ content });
    console.log(newAnswer);
    try{
        await newAnswer.save();
        res.status(201).json(newAnswer);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}