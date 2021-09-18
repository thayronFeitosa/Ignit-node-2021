import { Request } from 'express';
import { container } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { CreateUserUseCase } from './CreateUserUseCase';


class CreateUserController {
  async handle(request: Request): Promise<void> {
    const { name, password, driver_license, email } = request.body;

    const createUserUseCase =  container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({
      name, password, driver_license, email
    });

    throw new AppError('', 201);
  }
}

export {
  CreateUserController
};
