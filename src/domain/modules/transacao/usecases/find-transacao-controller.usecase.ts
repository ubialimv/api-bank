import BaseController from '../../../controller/base.controller';
import { HttpRequest, HttpResponse } from '../../../http/http-helper';
import TransacaoRepositoryInterface from '../entities/interfaces/transacao.repository.interface';

export default class FindTransacaoController extends BaseController {
  constructor(private readonly repository: TransacaoRepositoryInterface) {
    super();
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.params;

      const transacoes = await this.repository.find(Number(id));
      const transacoesPlain = transacoes.map((x) => x.toPlain());

      return this.ok(200, transacoesPlain);
    } catch (error) {
      console.log(error);
      return this.serverError(error.message);
    }
  }
}
