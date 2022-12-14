import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import entryRoutes from './routes/mainPage.js'
import authRoutes from './routes/auth.js';
import qRoutes from './routes/questions.js';

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));


app.use('/main', entryRoutes);
app.use('/auth', authRoutes);
app.use('/questions', qRoutes);

const CONNECTION_URL = 'mongodb+srv://shawnz:shawnz123@cluster0.wfeiyw6.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3100;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
