import { Request } from 'express';
import { container } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { AuthenticateUserUseCase } from './AuthenticateUserUserCase';

const MESSAGE_PARAMETER_REQUIRED: string = "Email and Password Required";

class AuthenticateUserController {
  async handle(request: Request) {
    const { email, password } = request.body;

    if (!email || !password) throw new AppError(MESSAGE_PARAMETER_REQUIRED, 401);

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

   const authenticateInfo = await authenticateUserUseCase.execute({ email, password });
   throw new AppError(authenticateInfo, 201);
  }
}

export {
  AuthenticateUserController
}