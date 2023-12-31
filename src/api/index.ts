import express, {Request, Response} from 'express';

import categoryRoute from './routes/categoryRoute';
import speciesRoute from './routes/speciesRoute';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'animals api v1',
  });
});

router.use('/category', categoryRoute);

router.use('/species', speciesRoute);

export default router;
