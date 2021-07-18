import 'reflect-metadata';
import { makeApp, makeDatabase } from './shared/factories';

const db = makeDatabase();
const app = makeApp();

(async () => {
  await db.start();
  app.listen();
})();

process.on('unhandledRejection', async (error) => {
  await db.close();
  console.log('unhandledRejection', error);
});
