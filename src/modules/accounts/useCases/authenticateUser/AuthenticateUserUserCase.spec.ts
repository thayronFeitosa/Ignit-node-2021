import { AppError } from '@errors/AppError';
import { ICreateUserDTO } from '../../dto/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUserCase';

let authenticateUserUserCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase;

const user: ICreateUserDTO = {
  driver_license: '',
  email: 'teste@teste.com',
  name: 'teste',
  password: '123456789',
}

describe("Authenticate User", () => {
  usersRepositoryInMemory = new UsersRepositoryInMemory();
  authenticateUserUserCase = new AuthenticateUserUseCase(
    usersRepositoryInMemory
  );
  createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);

  it("Shout be able to authenticate an user", async () => {

    await createUserUseCase.execute(user);
    const result = await authenticateUserUserCase.execute({
      email: user.email,
      password: user.password
    })
    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an none existent user', async () => {
    expect(async () => {
      await authenticateUserUserCase.execute({
        email: 'false@email.com',
        password: '12365'
      })
    }).rejects.toBeInstanceOf(AppError)

  })

  it('should not be able to authenticate with incorrect password', async () => {
    expect(async () => {
      await authenticateUserUserCase.execute({
        email: user.email,
        password: 'incorree password'
      })
    }).rejects.toBeInstanceOf(AppError)

  })

});