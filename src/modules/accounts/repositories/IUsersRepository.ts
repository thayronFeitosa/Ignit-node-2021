import { ICreateUserDTO } from "../dto/ICreateUserDTO";

interface IUsersRepository {
  
 created({name, username, password, email, driver_license}: ICreateUserDTO): Promise<void>
}

export { IUsersRepository}