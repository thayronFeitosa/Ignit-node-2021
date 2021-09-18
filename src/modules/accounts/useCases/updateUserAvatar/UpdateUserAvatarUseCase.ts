import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { deletFile } from '../../../../shared/utils/file';

interface IRequest {
  user_id: string;
  avatar_file: string;
}


@injectable()
class UpdateUserAvatarUseCase {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) { }
  async execute({ avatar_file, user_id }: IRequest) {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      deletFile(`./tmp/avatar/${user.avatar}`)
    }

    user.avatar = avatar_file;
    await this.usersRepository.created(user)
  }
}

export {
  UpdateUserAvatarUseCase
}