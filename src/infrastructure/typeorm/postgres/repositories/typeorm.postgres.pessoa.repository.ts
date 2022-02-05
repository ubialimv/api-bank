import { getConnection } from 'typeorm';
import Pessoa from '../../../../domain/modules/pessoa/entities/pessoa.entity';
import PessoaRepositoryInterface from '../../../../domain/modules/pessoa/interfaces/pessoa.repository.interface';
import PessoaModel from '../models/pessoa.model';

export default class PessoaRepository implements PessoaRepositoryInterface {
  async findOne(id: number): Promise<Pessoa | undefined> {
    const pessoaFound = await getConnection()
      .getRepository(PessoaModel)
      .findOne(id);

    if (pessoaFound !== undefined) {
      return pessoaFound.toDomain();
    }

    return undefined;
  }
}
