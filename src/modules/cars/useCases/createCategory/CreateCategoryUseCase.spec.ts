import { AppError } from "@shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemoey: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  beforeAll(() => {
    categoriesRepositoryInMemoey = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemoey
    );
  })

  it('should be able to create a new category', async () => {
    const categor = {
      name: 'Category Test',
      description: 'Category description Test'
    }
    await createCategoryUseCase.execute({
      name: categor.name,
      description: categor.description
    });

    const categoryCreated = await categoriesRepositoryInMemoey.findByName(categor.name);

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to create a new category with same name exists', async () => {

    expect(async () => {
      const categor = {
        name: 'Category Test',
        description: 'Category description Test'
      }
      await createCategoryUseCase.execute({
        name: categor.name,
        description: categor.description
      });

      await createCategoryUseCase.execute({
        name: categor.name,
        description: categor.description
      });
    }).rejects.toBeInstanceOf(AppError)


  })
})