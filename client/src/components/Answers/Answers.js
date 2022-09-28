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
            <div style={{marginBottom:10}}>
                {questions.map((ques, index) => (
                    <Question question={ques} key = {index}/>
                ))}
            </div>
            <div>
                {answers.map((ans, index) => (
                    <Answer ans={ans} key = {index}/>
                ))}
            </div>
            
            </>
            
        )
    )
}

export default Answers;