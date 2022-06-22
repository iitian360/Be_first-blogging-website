import express from 'express';
import {contact_me, phone} from '../controllers/contact_controller.js'
const router=express.Router();

router.get('/', contact_me)
router.get('/call',phone)

export default router;