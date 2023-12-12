import { Request, Response } from 'express';
import Product from '../models/product.model';

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json(error);
    }
}