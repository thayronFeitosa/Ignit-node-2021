import { Router, Request, Response } from 'express';

import { Category } from '../modules/category/models/Category';

const categoriesRouter = Router();

const categories: Category[] = [];

categoriesRouter.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const category = new Category();
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ 'sucess': category }); // eslint-disable-line
});

categoriesRouter.get('/', (request: Request, response: Response) => (
  response.status(201).json({ 'sucess': categories }) // eslint-disable-line
));

export { categoriesRouter };
