import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import alunoRoutes from './routes/alunoRoutes';
import tokenRoutes from './routes/tokenRoutes';
import photoRoutes from './routes/photoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // this.app.use(express.static(resolve(__dirname, '..', 'uploads')));

    // this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
    // this.app.use('/uploads', express.static(resolve(__dirname, '..', '/images')));
    // this.app.use('/uploads', express.static(resolve(__filename, '..', 'images')));
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', photoRoutes);
  }
}

export default new App().app;
