import express from 'express';

import { getQuestions } from '../controllers/questions.js';
import { createAnswer } from '../controllers/answers.js';

const router = express.Router();

router.get('/', getQuestions);
router.post('/', createAnswer);

export default router;