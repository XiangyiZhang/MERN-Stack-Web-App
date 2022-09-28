import express from 'express';

import { getAllAnswers } from '../controllers/answers.js';
import { createQuestion } from '../controllers/questions.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getAllAnswers);
router.post('/', auth, createQuestion);

export default router;