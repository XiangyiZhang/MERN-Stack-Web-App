import express from 'express';
import mongoose from 'mongoose';

import Question from '../models/question.js';

export const getQuestions = async (req, res) => {
    try{
        const questionInfo = await Question.find().populate('askedBy','username');
        res.status(200).json(questionInfo);
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const getQuestionAndAnsById = async (req, res) => {
    const { id } = req.params;
    
    try{
        const question = await Question.findById(id);
        const answers  = await question.populate({
            path:'answers',
            model:'Answer',
            populate: {
                path:'author',
                model:'User',
                select:'username'
            }
        });
        console.log(answers);


        res.status(200).json({
            question: question,
            answers: answers
        })
    }catch(error){
        res.status.json({message:error});
    }
}

export const createQuestion = async (req, res) =>{
    var { title, description, tags } = req.body;
    if(title.charAt(title.length-1) !== '?' && title.charAt(title.length-1) !== '？'){
        title = title + '?';
    }
    const newQuestion = new Question({title, description, tags, askedBy: req.userId});
    try{
        await newQuestion.save();
        res.status(201).json(newQuestion);
    }catch(error){
        res.status(404).json({message:error});
    }
}