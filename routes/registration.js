import express from 'express';
import { reg_page } from '../controllers/register_controller.js';

const router=express.Router();

router.get('/', reg_page);
export default router;