import express from 'express';
import { myLogin,myRegister,verify } from '../controllers/login_controller.js';
const router=express.Router();

router.get('/', myLogin);
router.post('/',verify)
router.get('/registration',myRegister);

export default router;