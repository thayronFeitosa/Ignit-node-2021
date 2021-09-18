import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async findById(user_id: string): Promise<User> {
    const user = await this.repository.findOne({ id: user_id });
    return user
  }
  async findByEmail(email: any): Promise<User> {
    
    const user = await this.repository.findOne({ email: email });
    return user

  }

  async created({
    driver_license,
    password,
    email,
    name,
    avatar,
    id
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      driver_license,
      password,
      email,
      name,
      avatar,
      id
    });

    await this.repository.save(user)
  }

}

export { UsersRepository };
