import React, { useEffect }from 'react';
import { Button, Box, AppBar, Typography, Toolbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

import Answers from './components/Answers/Answers';
import QuestionForm from './components/QuestionForm/QuestionForm';
import theme from './theme';
import { loadAns } from './slices/answerSlice';
import { loadQuestions } from './slices/questionSlice';

import SignInForm from './components/SignInForm/SignInForm';

const App = () => {
    const [openQuestionForm, setOpenQuestionForm] = React.useState(false);
    const handleOpenQuestionForm = () => setOpenQuestionForm(true);
    const handleCloseQuestionForm = () => setOpenQuestionForm(false);
    const [openSigninForm, setOpenSigninForm] = React.useState(false);
    const handleOpenSigninForm = () => setOpenSigninForm(true);
    const handleCloseSigninForm = () => setOpenSigninForm(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAns());
        dispatch(loadQuestions());
        
    })

    return(
        //<SignIn></SignIn>
        <ThemeProvider theme={theme}>  
            <Box sx={{ flexGrow: 1 }} color='secondary'>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0.73 }}>
                            Quohoo
                        </Typography>
                        <Button onClick={handleOpenQuestionForm} size='small'sx={{
                            
                            bgcolor: 'button.ask',
                            borderRadius:5,
                            '&:hover': {bgcolor: 'button.hover'}
                            }}>Add Questions
                        </Button>
                        <Button onClick={handleOpenSigninForm} size='small'sx={{
                            bgcolor: 'button.ask',
                            borderRadius:5,
                            '&:hover': {bgcolor: 'button.hover'}
                            }}>Sign In/Sign Up
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Answers/>
            <QuestionForm open = {openQuestionForm} handleClose = {handleCloseQuestionForm}/>
            <SignInForm open = {openSigninForm} handleClose = {handleCloseSigninForm}/>
        </ThemeProvider>
        
    )
}

export default App;