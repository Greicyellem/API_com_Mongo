import express from "express";
import * as productController from '../controllers/product.controller';

const router = express.Router();

router.get('/', productController.getAllProducts)

export default router;