import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUserCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUserCase = container.resolve(ListCategoriesUserCase);
    const all = await listCategoryUserCase.execute();
    return response.json(all);
  }
}

export { ListCategoriesController };
