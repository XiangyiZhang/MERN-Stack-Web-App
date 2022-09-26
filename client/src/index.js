import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
//import { createStore, applyMiddleWare, compose } from 'redux';

import './index.css'
import App from "./App.js";

//import userReducer from "./reducers/userReducer";
//import qReducer from "./reducers/qReducer";
//import aReducer from './reducers/aReducer';
import answerRedcuer from './slices/answerSlice';
import questionReducer from './slices/questionSlice';

const store = configureStore({
    reducer: {
        answers: answerRedcuer,
        questions: questionReducer,
    }
})

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);