import { Router } from 'express';

import { categoriesRoute } from './categories.routes';
import { specificationsRouter } from './espeficitations.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoute);
router.use('/specification', specificationsRouter);
router.use('/users', usersRoutes);
export { router };
