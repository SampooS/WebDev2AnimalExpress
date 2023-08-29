import {RowDataPacket} from 'mysql2';

interface Category {
  category_id: number;
  category_name: string;
}

type PostCategory = Omit<Category, 'category_id'>;

interface GetCategory extends RowDataPacket, Category {}

export {Category, GetCategory, PostCategory};
