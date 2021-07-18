import { getConnection } from 'typeorm';

import Conta from '../../../../domain/modules/conta/entities/conta.entity';
import ContaExceptions from '../../../../domain/modules/conta/entities/exceptions';
import ContaRepositoryInterface from '../../../../domain/modules/conta/interfaces/conta.repository.interface';
import PessoaRepositoryInterface from '../../../../domain/modules/pessoa/interfaces/pessoa.repository.interface';
import ContaModel from '../models/conta.model';
import PessoaModel from '../models/pessoa.model';

export default class ContaRepository implements ContaRepositoryInterface {
  constructor(private readonly pessoaRepository: PessoaRepositoryInterface) {}

  async save(conta: Conta): Promise<Conta> {
    const data = ContaModel.from(conta);
    const pessoa = await this.pessoaRepository.findOne(conta.getIdPessoa());

    if (pessoa === undefined) {
      throw new Error(ContaExceptions.PERSON_NOT_FOUND);
    }

    data.pessoa = PessoaModel.from(pessoa);

    const contaCreated = await getConnection()
      .getRepository(ContaModel)
      .save(data);

    return contaCreated.toDomain();
  }

  async findOne(id: number): Promise<Conta | undefined> {
    const contaFound = await getConnection()
      .getRepository(ContaModel)
      .findOne(id, { relations: ['pessoa'] });

    if (contaFound !== undefined) {
      return contaFound.toDomain();
    }

    return undefined;
  }
}
