import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import Answer from './Answer/Answer';
import {
    selectAns
} from '../../slices/answerSlice';

const Answers = () => {

    const { answers } = useSelector(selectAns);

    return (
        !answers ? <CircularProgress/> : (
            <>
            {answers.map((ans, index) => (
                <Answer ans={ans} key = {index}/>
            ))}
            </>
            
        )
    )
}

export default Answers;