import mongoose from 'mongoose';
import Category from '../models/category.model';

const seedCategories = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mongostore', {
      family: 4,
    });
    
    const categoriesData = [
      { category_name: 'Electronics' },
      { category_name: 'Clothing' },
      { category_name: 'Books' },
      // Adicione mais categorias conforme necessário
    ];

    await Category.insertMany(categoriesData);
    console.log('Categories seeded successfully.');
  } catch (error) {
    console.error('Error seeding categories:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedCategories();