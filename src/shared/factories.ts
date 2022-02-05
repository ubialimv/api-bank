import { json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

import App from '../application/app';
import errorHandler from '../application/middlewares/errorHandler.middleware';
import {
  openApiValidatorMiddleware,
  OPEN_API_SPEC_FILE_LOCATION,
} from '../application/middlewares/openApi.middleware';
import ContaRepository from '../infrastructure/typeorm/postgres/repositories/typeorm.postgres.conta.repository';
import TransacaoRepository from '../infrastructure/typeorm/postgres/repositories/typeorm.postgres.transacao.repository';
import PessoaRepository from '../infrastructure/typeorm/postgres/repositories/typeorm.postgres.pessoa.repository';

import BlockContaController from '../domain/modules/conta/usecases/block-conta-controller.usecase';
import CreateContaController from '../domain/modules/conta/usecases/create-conta.controller.usecase';
import DepositContaController from '../domain/modules/conta/usecases/deposit-conta-controller.usecase';
import AddTransacao from '../domain/modules/transacao/usecases/add-transacao.usecase';
import GetBalanceContaController from '../domain/modules/conta/usecases/get-balance-conta-controller.usecase';
import WithdrawContaController from '../domain/modules/conta/usecases/withdraw-conta-controller.usecase';
import FindTransacaoController from '../domain/modules/transacao/usecases/find-transacao-controller.usecase';

import contaRoutes from '../application/routes/conta.route';
import PostgresHelper from '../infrastructure/typeorm/postgres/typeorm.postgres.helper';

const makePessoaRepository = () => new PessoaRepository();
const makeContaRepository = () => new ContaRepository(makePessoaRepository());
const makeTransacaoRepository = () => new TransacaoRepository();

const makeBlockContaController = () =>
  new BlockContaController(makeContaRepository());

const makeCreateContaController = () =>
  new CreateContaController(makeContaRepository());

const makeAddTransacaoUseCase = () =>
  new AddTransacao(makeTransacaoRepository());

const makeDepositContaController = () =>
  new DepositContaController(makeContaRepository(), makeAddTransacaoUseCase());

const makeGetBalanceContaController = () =>
  new GetBalanceContaController(makeContaRepository());

const makeWithdrawContaController = () =>
  new WithdrawContaController(makeContaRepository(), makeAddTransacaoUseCase());

const makeFindTransacaoController = () =>
  new FindTransacaoController(makeTransacaoRepository());

const makeDatabase = () => new PostgresHelper();

const makeMiddlewares = () => [
  json(),
  urlencoded({ extended: true }),
  cors(),
  compression(),
  helmet(),
  morgan('combined'),
  openApiValidatorMiddleware,
];

const makeApp = () =>
  new App({
    port: 3000,
    middleWares: makeMiddlewares(),
    routes: [contaRoutes],
    spec: OPEN_API_SPEC_FILE_LOCATION,
    errorHandler,
  });

export {
  makeDatabase,
  makeApp,
  makeBlockContaController,
  makeCreateContaController,
  makeDepositContaController,
  makeGetBalanceContaController,
  makeWithdrawContaController,
  makeFindTransacaoController,
};
