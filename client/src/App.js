import React, { useState, useEffect }from 'react';
import { Toolbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

import NavBar from './components/NavBar/NavBar';
import Answers from './components/Answers/Answers';
import QuestionPage from './components/QuestionPage/QuestionPage';
import QuestionForm from './components/QuestionForm/QuestionForm';
import theme from './theme';
import { loadAns } from './slices/answerSlice';
import { loadQuestions } from './slices/questionSlice';
import { selectUser, selectToken, logOut } from './slices/authSlice';
import SignInForm from './components/SignInForm/SignInForm';

const App = () => {
    const { user } = useSelector(selectUser);
    const { token } = useSelector(selectToken);

    const [openQuestionForm, setOpenQuestionForm] = React.useState(false);
    const handleOpenQuestionForm = () => setOpenQuestionForm(true);
    const handleCloseQuestionForm = () => setOpenQuestionForm(false);

    const [openSigninForm, setOpenSigninForm] = React.useState(false);
    const handleOpenSigninForm = () => setOpenSigninForm(true);
    const handleCloseSigninForm = () => setOpenSigninForm(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if(token){
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()){dispatch(logOut())};
        }
        dispatch(loadQuestions());
        dispatch(loadAns());
    },[token])

    return(
        //<SignIn></SignIn>
        <ThemeProvider theme={theme}>  
            <NavBar user={user} token={token} handleOpenQuestionForm={handleOpenQuestionForm} handleOpenSigninForm={handleOpenSigninForm}/>
            <Toolbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Answers/>} />
                    <Route path='/question/:id' element={<QuestionPage/>} />
                </Routes>
            </BrowserRouter>
            <QuestionForm user={user} token={token} open = {openQuestionForm} handleClose = {handleCloseQuestionForm}/>
            <SignInForm open = {openSigninForm} handleClose = {handleCloseSigninForm}/>
        </ThemeProvider>
        
    )
}

export default App;