import { json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import App from '../application/app';
import HomeController from '../domain/home/useCases/homeController';
import homeRoutes from '../application/routes/home.route';

const makeMiddlewares = () => [
  json(),
  urlencoded({ extended: true }),
  cors(),
  compression(),
  helmet(),
  morgan('combined'),
];

const makeHomeController = () => new HomeController();

const makeApp = () => {
  return new App({
    port: 3000,
    middleWares: makeMiddlewares(),
    routes: [homeRoutes],
  });
};

export { makeApp, makeHomeController };
