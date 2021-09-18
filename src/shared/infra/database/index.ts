import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = '172.18.0.2'; //Aqui você coloca o ip do banco encontrado
  createConnection({
    ...options,
  });
});