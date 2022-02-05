import BaseController from '../../../controller/base.controller';
import { HttpRequest, HttpResponse } from '../../../http/http-helper';
import Conta from '../entities/conta.entity';
import ContaRepositoryInterface from '../interfaces/conta.repository.interface';

export default class CreateContaController extends BaseController {
  constructor(private readonly repository: ContaRepositoryInterface) {
    super();
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const conta = new Conta(req.body);

      const createdConta = await this.repository.save(conta);
      return this.ok(200, createdConta.toPlain());
    } catch (error) {
      return this.serverError(error.message);
    }
  }
}
