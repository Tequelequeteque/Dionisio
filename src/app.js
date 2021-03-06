import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import * as Sentry from '@sentry/node';
import express from 'express';
import cors from 'cors';
import Youch from 'youch';
import 'express-async-errors';
import routes from './routes';

import './database';
import sentryConfig from './config/sentry';

class App {
  constructor() {
    Sentry.init(sentryConfig);
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      const errors = await new Youch(err, req).toJSON();
      return res.status(INTERNAL_SERVER_ERROR).json(errors);
    });
  }
}

export default new App().server;
