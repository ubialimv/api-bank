import TransacaoRepositoryInterface from '../entities/interfaces/transacao.repository.interface';
import Transacao from '../entities/transacao.entity';

export interface AddTransacaoInterface {
  idConta: number;
  valor: number;
  tipo: 'saque' | 'deposito';
}

export default class AddTransacao {
  constructor(private readonly repository: TransacaoRepositoryInterface) {}

  async handle(data: AddTransacaoInterface) {
    const transacao = new Transacao({ ...data, dataTransacao: new Date() });
    return this.repository.insert(transacao);
  }
}
