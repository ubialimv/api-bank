import Pessoa from '../entities/pessoa.entity';

export default interface PessoaRepositoryInterface {
  findOne(id: number): Promise<Pessoa | undefined>;
}
