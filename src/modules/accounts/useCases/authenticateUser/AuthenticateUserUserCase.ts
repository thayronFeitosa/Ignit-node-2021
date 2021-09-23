import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

const MESSAGE_ERROR_AUTHENTICATION_INVALID_PASS: string = "Email or password not incorrect"


@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new AppError(MESSAGE_ERROR_AUTHENTICATION_INVALID_PASS, 401);

    const passwordMath = await compare(password, user.password);

    if (!passwordMath) throw new AppError(MESSAGE_ERROR_AUTHENTICATION_INVALID_PASS, 401);
    const token = sign({}, "92ccbdb59b39217b67924a87807ad8a9", {
      expiresIn: "1d",
      subject: user.id,
    });

    return {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }

  }
}

export { AuthenticateUserUseCase };

