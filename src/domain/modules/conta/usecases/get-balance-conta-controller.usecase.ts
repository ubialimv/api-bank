import BaseController from '../../../controller/base.controller';
import { HttpRequest, HttpResponse } from '../../../http/http-helper';
import ContaExceptions from '../entities/exceptions';
import ContaRepositoryInterface from '../interfaces/conta.repository.interface';

export default class GetBalanceContaController extends BaseController {
  constructor(private readonly repository: ContaRepositoryInterface) {
    super();
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.params;

      const conta = await this.repository.findOne(Number(id));

      if (conta === undefined) {
        return this.NotFound(ContaExceptions.ACCOUNT_NOT_FOUND);
      }

      const saldo = conta.getBalance();

      return this.ok(200, { saldo });
    } catch (error) {
      console.log(error);
      return this.serverError(error.message);
    }
  }
}
