import express from 'express';

import { getQuestionAndAnsById, getQuestions } from '../controllers/questions.js';
import { createAnswer } from '../controllers/answers.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getQuestions);
router.get('/:id', getQuestionAndAnsById);
router.post('/:id', auth, createAnswer);

export default router;