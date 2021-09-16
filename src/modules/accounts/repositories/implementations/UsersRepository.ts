import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async created({ driver_license, password, email, name }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ driver_license, password, email, name });

    await this.repository.save(user)
  }

}

export { UsersRepository };
