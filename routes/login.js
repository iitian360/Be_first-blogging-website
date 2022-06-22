import express from 'express';
import { myLogin,myRegister } from '../controllers/login_controller.js';
const router=express.Router();

router.get('/', myLogin);
router.get('/registration',myRegister);

export default router;