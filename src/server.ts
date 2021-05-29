import express from 'express';

import 'reflect-metadata';
import { router } from './routes';
import './database';
import './shared/container';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => { console.log('servidor rodando na porta 3333'); });