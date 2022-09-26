import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import Answer from './Answer/Answer';
import Question from './Question/Question';
import { selectAns } from '../../slices/answerSlice';
import { selectQuestions } from '../../slices/questionSlice';

const Answers = () => {

    const { answers } = useSelector(selectAns);
    const { questions } = useSelector(selectQuestions);

    return (
        !answers && !questions? <CircularProgress/> : (
            <>
            {questions.map((ques, index) => (
                <Question question={ques} key = {index}/>
            ))}
            {answers.map((ans, index) => (
                <Answer ans={ans} key = {index}/>
            ))}
            </>
            
        )
    )
}

export default Answers;