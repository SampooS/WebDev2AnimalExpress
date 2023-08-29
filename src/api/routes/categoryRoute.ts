import express from 'express';
import {
  categoryGet,
  categoryListGet,
  categoryPost,
} from '../controllers/categoryController';

const router = express.Router();

router.route('/').get(categoryListGet);

router.route('/:id').get(categoryGet);

router.route('/').post(categoryPost);

export default router;
