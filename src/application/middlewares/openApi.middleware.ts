import * as path from 'path';
import * as OpenApiValidator from 'express-openapi-validator';

const OPEN_API_SPEC_FILE_LOCATION = path.join(
  __dirname,
  '../..',
  'contracts/api-bank.yaml',
);

const openApiValidatorMiddleware = OpenApiValidator.middleware({
  apiSpec: OPEN_API_SPEC_FILE_LOCATION,
  validateRequests: true,
  validateResponses: true,
  validateFormats: 'full',
});

export { openApiValidatorMiddleware, OPEN_API_SPEC_FILE_LOCATION };
