import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import router from '@/config/router';

const ExpressConfig = (): Application => {
  const app = express();

  const corsOptions = {
    origin: process.env.CORS_ORIGIN ?? '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

  app.use(cors(corsOptions));
  app.use(compression());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(helmet());
  app.use(morgan('dev'));

  app.use('/v1', router);

  return app;
};
export default ExpressConfig;
