import BaseController from '../../../controller/base.controller';
import { HttpRequest, HttpResponse } from '../../../http/http-helper';
import AddTransacao from '../../transacao/usecases/add-transacao.usecase';
import ContaExceptions from '../entities/exceptions';
import ContaRepositoryInterface from '../interfaces/conta.repository.interface';

export default class DepositContaController extends BaseController {
  constructor(
    private readonly repository: ContaRepositoryInterface,
    private readonly addTransacao: AddTransacao,
  ) {
    super();
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id, amount } = req.body;
      const conta = await this.repository.get(id);

      if (conta === undefined) {
        return this.NotFound(ContaExceptions.ACCOUNT_NOT_FOUND);
      }

      try {
        conta.deposit(amount);
      } catch (error) {
        return this.BusinessError(error.message);
      }

      await this.repository.update(conta, id);
      await this.addTransacao.handle({
        idConta: conta.getIdConta(),
        tipo: 'deposito',
        valor: amount,
      });
      return this.ok(conta);
    } catch (error) {
      return this.serverError(error.message);
    }
  }
}
