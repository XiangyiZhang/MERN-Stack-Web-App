import express from 'express';

import { getQuestions } from '../controllers/questions.js';
import { createAnswer } from '../controllers/answers.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getQuestions);
router.post('/', auth, createAnswer);

export default router;