import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/proposal', authController.proposal);
router.post('/signup', authController.signup);
router.post('/login', authController.login);

export default router;
