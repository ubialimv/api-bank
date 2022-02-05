import Conta from '../entities/conta.entity';

export default interface ContaRepositoryInterface {
  save(conta: Conta): Promise<Conta>;
  findOne(id: number): Promise<Conta | undefined>;
}
