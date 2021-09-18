import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from '../../dto/ICreateUserDTO'
import { hash } from 'bcrypt'
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  async execute({
    name,
    password,
    email,
    driver_license
  }: ICreateUserDTO): Promise<void> {
    
    const passwordHash = await hash(password, 10);

    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    
    if(userAlreadyExists) throw new AppError('Email arealy exist')
    
    await this.usersRepository.created({
      name,
      password: passwordHash,
      email,
      driver_license
    })
  }
}

export {
  CreateUserUseCase
}