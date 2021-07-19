## Node Api with TypeScript

### Description

This api is responsible for the manage bank accounts. It was built using Express.js, TypeScript, and Postgres.

Pay attention to the boundaries rules settled in eslint, the structure is not DDD by the book, but I was taken into consideration.

The api is Contract-First, so it's using a middleware that reads the routes documentation and validate each route accordingly to it. This middleware validates request and response, so any new route or any change, must start with the documentation.

The documentation is a [Swagger](https://swagger.io/resources/open-api/) file and can be found at `contracts` folder after you start de api you may see it accessing /docs.

### Dependencies

To install the projects dependencies, run the following command:

```bash
$ yarn
```

### Running the application

As it was mentioned this api is using Postgres, but all you need to do is run the database from the docker-compose.yml:

```bash
$ docker-compose up
```

#### Development

After that, copy and past `environments/.env.local` and rename it to `environments/.env`.

All done? run:

```bash
# development
$ yarn dev
```

#### Production

```bash
# production
$ yarn start
```

### Env vars

- PORT: Port the api is going to use. (default 3000);

If you are using the database from the docker file I don't recommend changing the following vars:

- TYPE_ORM_DATABASE: Database name;
- TYPE_ORM_HOST: Database host;
- TYPE_ORM_PORT: Database port;
- TYPE_ORM_PASSWORD: Database user password;
- TYPE_ORM_USERNAME: Database user;
- TYPE_ORM_SYNCHRONIZE: When true it'll sync your entities with the database, every time you run the application. Be careful when using in production;
- TYPE_ORM_LOGGING: When true it'll log any communication with the database.
