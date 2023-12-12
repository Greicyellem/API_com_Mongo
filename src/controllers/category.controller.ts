import { Request, Response } from 'express';
import Category from '../models/category.model';

// READ - Obter todos os produtos
export const getAllcategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};