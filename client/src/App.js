import React, { useState, useEffect }from 'react';
import { Toolbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import Answers from './components/Answers/Answers';
import QuestionForm from './components/QuestionForm/QuestionForm';
import theme from './theme';
import { loadAns } from './slices/answerSlice';
import { loadQuestions } from './slices/questionSlice';
import { selectUser, selectToken } from './slices/authSlice';
import SignInForm from './components/SignInForm/SignInForm';

const App = () => {
    const { user } = useSelector(selectUser);
    //const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const { token } = useSelector(selectToken);

    const [openQuestionForm, setOpenQuestionForm] = React.useState(false);
    const handleOpenQuestionForm = () => setOpenQuestionForm(true);
    const handleCloseQuestionForm = () => setOpenQuestionForm(false);

    const [openSigninForm, setOpenSigninForm] = React.useState(false);
    const handleOpenSigninForm = () => setOpenSigninForm(true);
    const handleCloseSigninForm = () => setOpenSigninForm(false);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(user);
        dispatch(loadQuestions());
        dispatch(loadAns());
        
    })

    return(
        //<SignIn></SignIn>
        <ThemeProvider theme={theme}>  
            <NavBar user={user} token={token} handleOpenQuestionForm={handleOpenQuestionForm} handleOpenSigninForm={handleOpenSigninForm}/>
            <Toolbar />
            <Answers style={{positon:'abosolute',top:100}} />
            <QuestionForm user={user} token={token} open = {openQuestionForm} handleClose = {handleCloseQuestionForm}/>
            <SignInForm open = {openSigninForm} handleClose = {handleCloseSigninForm}/>
        </ThemeProvider>
        
    )
}

export default App;