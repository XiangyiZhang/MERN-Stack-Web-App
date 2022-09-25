import express from 'express';

import { getAllAnswers } from '../controllers/answers.js';
import { createQuestion } from '../controllers/questions.js';

const router = express.Router();

router.get('/', getAllAnswers);
router.post('/', createQuestion);

export default router;