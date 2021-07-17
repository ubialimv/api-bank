import Conta from '../entities/conta.entity';

export default interface ContaRepositoryInterface {
  insert(conta: Conta): Promise<Conta>;
  update(props: Partial<Conta>, id: string): Promise<Conta>;
  get(id: number): Promise<Conta | undefined>;
}
