import { HttpRequest, HttpResponse } from '../http/http-helper';

export default abstract class BaseController {
  public abstract handle(req: HttpRequest): Promise<HttpResponse>;

  public ok<T>(data: T): HttpResponse {
    return {
      statusCode: 200,
      body: data,
    };
  }

  public badRequest(error: Error): HttpResponse {
    return {
      statusCode: 400,
      body: error.message,
    };
  }

  public serverError(reason: string): HttpResponse {
    return {
      statusCode: 500,
      body: new Error(reason),
    };
  }
}
