import express, { Application } from 'express';

export default class App {
  public readonly application: Application;

  public readonly port: number;

  constructor(props: { port: number; middleWares: any[]; routes: any[] }) {
    this.application = express();
    this.port = props.port;

    this.useMiddlewares(props.middleWares);
    this.useRoutes(props.routes);
  }

  private useMiddlewares(middleWares: any[]) {
    middleWares.forEach((middleWare: any) => this.application.use(middleWare));
  }

  private useRoutes(routes: any[]) {
    routes.forEach((route) => route(this.application));
  }

  public listen() {
    return this.application.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}
