import BaseController from '../../../controller/base.controller';
import { HttpRequest, HttpResponse } from '../../../http/http-helper';
import ContaExceptions from '../entities/exceptions';
import ContaRepositoryInterface from '../interfaces/conta.repository.interface';

export default class BlockContaController extends BaseController {
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

      conta.block();

      await this.repository.save(conta);

      return this.ok(200, conta.toPlain());
    } catch (error) {
      return this.serverError(error.message);
    }
  }
}
