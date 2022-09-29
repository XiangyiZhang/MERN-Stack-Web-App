import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Box, Container, InputBase, Typography, Paper, Link as LinkMaterial } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Link as LinkReactRouter, useParams } from 'react-router-dom';

import { loadQuestionPage, selectAnswers, selectQuestion } from '../../slices/qPageSlice';
import Answer from '../Answers/Answer/Answer';
import theme from './theme';
import * as api from '../../api';

const QuestionPage = () => {
    const [ openInput, setOpenInput ] = useState(false);
    const [ openError, setOpenError ] = useState(false);
    const [ newAnswer, setNewAnswer ] = useState({ content:'' })
    const { id } = useParams();
    const dispatch = useDispatch();
    const { qPageQuestion } = useSelector(selectQuestion);
    const { qPageAnswers } = useSelector(selectAnswers);

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(()=>{
        dispatch(loadQuestionPage(id));
    }, [id]);
    
    const handleOpenInput = () => {
        if(user){
            setOpenInput(true);
        }else{
            setOpenError(true);
        }
    }
    const handleSubmit = (event) =>{
        const formData = newAnswer;
        api.postAnswer(formData, id).then(window.location.reload(false));
        
    }
    console.log(qPageAnswers)
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{width: 800, flexGrow:1}}>
                <Box sx={{bgcolor: 'background.paper', mb: 1, padding: 2, boxShadow:8, border:1, borderColor:'grey.main'}}>
                    <Typography variant='h5' color = 'common.black' sx={{ fontWeight: 600 }}>
                        {qPageQuestion.title}
                    </Typography>
                    <Typography variant='body2' color = 'common.black' sx = {{pb:2}}>
                        {qPageQuestion.description}
                    </Typography>
                    <Button 
                        sx={{borderRadius:1}}
                        variant='contained'
                        onClick={handleOpenInput}
                    >Add Answer
                    </Button>
                    {openError?<Typography color='error' variant='body2' sx={{pt:2}}>Please Sign in before adding an answer.</Typography>:<></>}
                </Box>
            </Container>
            {openInput?
            <Container sx={{width: 800, flexGrow:1}}>
                <Box sx={{bgcolor: 'background.paper', mb: 1, padding: 2, boxShadow:8, border:1, borderColor:'grey.main'}}>
                    <InputBase fullWidth multiline minRows={10}sx={{borderTop:5, borderColor:'#7094db' ,padding: 1, boxShadow:4}} onChange={(e)=> setNewAnswer({content: e.target.value})}></InputBase>
                    <Button 
                        sx={{borderRadius:1, mt: 2}}
                        variant='contained'
                        onClick={handleSubmit}
                    >Submite Answer</Button>
                </Box>
            </Container>:<></>
            }
            
            {qPageAnswers.answers? qPageAnswers.answers.map((ans, index) => (
                <Answer isMainPage={false} ans={ans} key = {index}/>
            )) : <></>}

        </ThemeProvider>
    )
}
export default QuestionPage