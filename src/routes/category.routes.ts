import express from 'express';
import * as categoryController from '../controllers/category.controller';

const router = express.Router();

router.get('/', categoryController.getAllcategories);

export default router;