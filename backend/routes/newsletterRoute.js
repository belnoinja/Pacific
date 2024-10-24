import express from 'express';
import {subscribeUser} from '../controllers/newsletterController.js';

const router = express.Router();

// POST /api/subscribe - Subscribe a user
router.post('/subscribe', subscribeUser);

export default router;
