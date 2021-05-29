import { Router } from 'express';

import { categoriesRoute } from './categories.routes';
import { specificationsRouter } from './espeficitations.routes';

const router = Router();

router.use('/categories', categoriesRoute);
router.use('/specification', specificationsRouter);
export { router };
