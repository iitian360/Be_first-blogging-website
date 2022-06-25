import express from 'express';
import { about_me } from '../controllers/about_controller.js';
const router=express.Router();

router.get('/',about_me);
export default router;