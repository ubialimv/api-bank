import { HttpRequest, HttpResponse } from '../http/http-helper';

export default abstract class BaseController {
  public abstract handle(req: HttpRequest): Promise<HttpResponse>;

  public ok<T>(data?: T): HttpResponse {
    const response: HttpResponse = { statusCode: 200 };

    if (!!data) {
      response.body = data;
    }

    return response;
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

  public NotFound(reason: string): HttpResponse {
    return {
      statusCode: 404,
      body: new Error(reason),
    };
  }

  public BusinessError(reason: string): HttpResponse {
    return {
      statusCode: 422,
      body: new Error(reason),
    };
  }
}
