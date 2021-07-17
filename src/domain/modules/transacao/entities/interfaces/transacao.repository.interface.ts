import Transacao from '../transacao.entity';

export default interface TransacaoRepositoryInterface {
  insert(transacao: Transacao): Promise<Transacao>;
  find(idConta: string): Promise<Transacao[]>;
}
