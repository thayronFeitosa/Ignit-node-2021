import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(@inject('ISpecificationRepository') private specificationRepository: ISpecificationRepository) { }
  execute({ name, description }: IRequest) {
    const epecificationArealyExists = this.specificationRepository.findByName(name);

    if (epecificationArealyExists) {
      throw new AppError('Specification arealy exists', 400);
    }

    this.specificationRepository.create({
      name, description,
    });
  }
}

export { CreateSpecificationUseCase };
