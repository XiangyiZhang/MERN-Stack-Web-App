import express from 'express';

import { createUser, verifyUser } from '../controllers/users.js';

const router = express.Router();

router.get('/login', verifyUser);
router.post('/register', createUser);

export default router;