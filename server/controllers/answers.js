import Answer from '../models/answer.js';
import Question from '../models/question.js';

export const getAllAnswers = async (req, res) => {
    try{
        const allAnswers = await Answer.find().populate('author', 'username').populate('question', 'title');
        res.status(200).json(allAnswers);
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const createAnswer = async (req, res) => {
    const qId = req.params.id;
    const { content } = req.body;
    const userId = req.userId;

    const newAnswer = new Answer({ content, author: userId, question: qId });
    //console.log(newAnswer);
    try{
        await Question.findByIdAndUpdate(qId, {$push: {answers: newAnswer._id}});
        await newAnswer.save();

        res.status(201).json(newAnswer);
    }catch(error){
        res.status(403).json({message:error.message});
    }
}