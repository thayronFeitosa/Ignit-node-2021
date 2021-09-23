import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];


  async created({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, { name, password, email, driver_license });
    this.users.push(user)
  }

  async findByEmail(email: any): Promise<User> {
    return this.users.find((user) => user.email === email)
  }
  async findById(user_id: string): Promise<User> {
    return this.users.find((user) => user.id === user_id)
  }

}

export { UsersRepositoryInMemory }