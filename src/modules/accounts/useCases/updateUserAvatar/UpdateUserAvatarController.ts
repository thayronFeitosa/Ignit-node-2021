import { Request } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request) {
    const { id } = request.user;

    const avatar_file = request.file.filename

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
    updateUserAvatarUseCase.execute({user_id: id,  avatar_file});
    throw new AppError('ok', 204)
  }
}

export {
  UpdateUserAvatarController
}