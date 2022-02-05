import Transacao from '../transacao.entity';

export default interface TransacaoRepositoryInterface {
  save(transacao: Transacao): Promise<Transacao>;
  find(idConta: number): Promise<Transacao[]>;
}
