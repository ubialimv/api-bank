import BaseController from '../../../controller/base.controller';
import { HttpRequest, HttpResponse } from '../../../http/http-helper';
import TransacaoRepositoryInterface from '../entities/interfaces/transacao.repository.interface';

export default class StatementTransacaoController extends BaseController {
  constructor(private readonly repository: TransacaoRepositoryInterface) {
    super();
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.body;

      const transacoes = await this.repository.find(id);
      return this.ok({ transacoes });
    } catch (error) {
      return this.serverError(error.message);
    }
  }
}
