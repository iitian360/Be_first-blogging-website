import express from 'express';
import { reg_page, put_data } from '../controllers/register_controller.js';

const router=express.Router();

router.get('/', reg_page);
router.post('/', put_data);
export default router;