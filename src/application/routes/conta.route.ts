import { Router } from 'express';
import expressRouteAdapter from './adapters/express-route.adapter';
import {
  makeBlockContaController,
  makeCreateContaController,
  makeDepositContaController,
  makeGetBalanceContaController,
  makeWithdrawContaController,
  makeFindTransacaoController,
} from '../../shared/factories';

export default (router: Router): void => {
  router.get(
    '/contas/:id/extrato',
    expressRouteAdapter(makeFindTransacaoController()),
  );

  router.get(
    '/contas/:id/saldo',
    expressRouteAdapter(makeGetBalanceContaController()),
  );

  router.post(
    '/contas/:id/saque',
    expressRouteAdapter(makeWithdrawContaController()),
  );

  router.post(
    '/contas/:id/deposito',
    expressRouteAdapter(makeDepositContaController()),
  );

  router.post(
    '/contas/:id/bloqueio',
    expressRouteAdapter(makeBlockContaController()),
  );

  router.post('/contas', expressRouteAdapter(makeCreateContaController()));
};
