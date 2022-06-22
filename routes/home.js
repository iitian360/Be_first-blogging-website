import express from 'express';
import { my_home } from '../controllers/home_controller.js';

const router=express.Router();

router.get('/',my_home)
router.get('/home',my_home)

export default router;
