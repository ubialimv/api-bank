import * as path from 'path';
import * as dotenv from 'dotenv';

const fileName = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
const envPath = path.join(__dirname, '../..', `environments/${fileName}`);

dotenv.config({ path: envPath });

export default {
  PORT: Number(process.env.PORT || 3000),

  TYPE_ORM_DATABASE: String(process.env.TYPE_ORM_DATABASE),
  TYPE_ORM_HOST: String(process.env.TYPE_ORM_HOST),
  TYPE_ORM_PORT: Number(process.env.TYPE_ORM_PORT),
  TYPE_ORM_PASSWORD: String(process.env.TYPE_ORM_PASSWORD),
  TYPE_ORM_USERNAME: String(process.env.TYPE_ORM_USERNAME),
  TYPE_ORM_SYNCHRONIZE: Boolean(process.env.TYPE_ORM_SYNCHRONIZE === 'true'),
  TYPE_ORM_LOGGING: Boolean(process.env.TYPE_ORM_LOGGING === 'true'),
};
