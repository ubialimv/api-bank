import { Application } from 'express';
import expressRouteAdapter from './adapters/express-route.adapter';
import { makeHomeController } from '../../shared/factories';

export default (app: Application): void => {
  app.get('/', expressRouteAdapter(makeHomeController()));
};
