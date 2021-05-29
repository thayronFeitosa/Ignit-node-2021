import { inject, injectable } from 'tsyringe';

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
      throw new Error('Specification arealy exists');
    }

    this.specificationRepository.create({
      name, description,
    });
  }
}

export { CreateSpecificationUseCase };
