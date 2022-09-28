import express from 'express';
import mongoose from 'mongoose';

import Question from '../models/question.js';

export const getQuestions = async (req, res) => {
    try{
        const questionInfo = await Question.find();
        res.status(200).json(questionInfo);
    }catch(error){
        res.status(404).json({message:error});
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