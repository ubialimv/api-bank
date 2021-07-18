import BaseController from '../../../controller/base.controller';
import { HttpRequest, HttpResponse } from '../../../http/http-helper';
import { EnumTipoTransacao } from '../../transacao/entities/transacao.entity';
import AddTransacao from '../../transacao/usecases/add-transacao.usecase';
import ContaExceptions from '../entities/exceptions';
import ContaRepositoryInterface from '../interfaces/conta.repository.interface';

export default class WithdrawContaController extends BaseController {
  constructor(
    private readonly repository: ContaRepositoryInterface,
    private readonly addTransacao: AddTransacao,
  ) {
    super();
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.params;
      const { valor } = req.body;

      const conta = await this.repository.findOne(Number(id));

      if (conta === undefined) {
        return this.NotFound(ContaExceptions.ACCOUNT_NOT_FOUND);
      }

      try {
        conta.withdraw(valor);
      } catch (error) {
        return this.BusinessError(error.message);
      }

      await this.repository.save(conta);
      await this.addTransacao.handle({
        idConta: conta.getIdConta(),
        tipo: EnumTipoTransacao.SAQUE,
        valor,
      });

      return this.ok(204);
    } catch (error) {
      return this.serverError(error.message);
    }
  }
}
