import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {

  created({ name, password, email, driver_license }: ICreateUserDTO): Promise<void>
  findByEmail(email): Promise<User>
  findById(user_id: string): Promise<User>;
}

export { IUsersRepository }