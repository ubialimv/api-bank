import BaseController from '../../controller/base.controller';
import { HttpRequest, HttpResponse } from '../../http/http-helper';

export default class HomeController extends BaseController {
  constructor(private readonly useCase?: any) {
    super();
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    return this.ok('ok');
  }
}
