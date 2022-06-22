import express from 'express';
import {
    my_blog, my_edu, my_fashion, my_health, my_life,
    my_relation, my_travel, my_art, my_tech
} from '../controllers/blog_controller.js'
const router = express.Router();

router.get('/', my_blog);
router.get('/technology', my_tech);
router.get('/relationship', my_relation);
router.get('/art', my_art);
router.get('/travel', my_travel);
router.get('/lifestyle', my_life);
router.get('/education', my_edu);
router.get('/fashion', my_fashion);
router.get('/health', my_health);


export default router;