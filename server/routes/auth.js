import express from 'express';

import { createUser, verifyUser } from '../controllers/users.js';

const router = express.Router();

router.post('/signin', verifyUser);
router.post('/signup', createUser);

export default router;