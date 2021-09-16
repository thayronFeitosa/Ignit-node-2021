import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from '../../dto/ICreateUserDTO'

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
    await this.usersRepository.created({
      name,
      password,
      email,
      driver_license
    })
  }
}

export {
  CreateUserUseCase
}