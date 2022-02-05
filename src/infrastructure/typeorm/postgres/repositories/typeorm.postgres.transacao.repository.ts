import { getConnection } from 'typeorm';
import TransacaoRepositoryInterface from '../../../../domain/modules/transacao/entities/interfaces/transacao.repository.interface';
import Transacao from '../../../../domain/modules/transacao/entities/transacao.entity';
import TransacaoModel from '../models/transacao.model';

export default class TransacaoRepository
  implements TransacaoRepositoryInterface
{
  async save(transacao: Transacao): Promise<Transacao> {
    const data = TransacaoModel.from(transacao);

    const transacaoCreated = await getConnection()
      .getRepository(TransacaoModel)
      .save(data);

    return transacaoCreated.toDomain();
  }

  async find(idConta: number): Promise<Transacao[]> {
    const transacoes = await getConnection()
      .getRepository(TransacaoModel)
      .find({ idConta });

    return transacoes.map((x) => x.toDomain());
  }
}
