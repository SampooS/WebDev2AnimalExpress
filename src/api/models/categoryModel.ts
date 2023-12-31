import {ResultSetHeader} from 'mysql2';
import promisePool from '../../database/db';
import {Category, GetCategory, PostCategory} from '../../interfaces/Category';

const getAllCategories = async () => {
  const [rows] = await promisePool.execute<GetCategory[]>(
    'SELECT * FROM categories'
  );
  if (!rows) {
    throw new Error('No categories found');
  }
  return rows as Category[];
};

const getCategoryById = async (id: number) => {
  const [rows] = await promisePool.execute<GetCategory[]>(
    'SELECT * FROM categories WHERE category_id = ?',
    [id]
  );
  if (!rows) {
    throw new Error('No categories found');
  }
  return rows[0] as Category;
};

const addCategory = async (category: PostCategory) => {
  const [headers] = await promisePool.execute<ResultSetHeader>(
    'INSERT INTO categories (category_name) VALUES (?)',
    [category.category_name]
  );
  if (headers.affectedRows === 0) {
    throw new Error('Category not added');
  }
  console.log('Added new category: ' + category.category_name.toString());
};

export {getAllCategories, getCategoryById, addCategory};
