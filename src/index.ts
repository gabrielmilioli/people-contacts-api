// 3p
import { Config, createApp, displayServerURL, ServiceManager } from '@foal/core';
import * as cors from 'cors';
import * as express from 'express';
// std
import * as http from 'http';
import 'source-map-support/register';
import { createConnection } from 'typeorm';
// App
import { AppController } from './app/app.controller';
import { ContactRepository } from './app/repository/contact.repository';
import { PersonRepository } from './app/repository/person.repository';

async function main() {
  const expressInstance = express();
  expressInstance.use(cors());

  const connection = await createConnection();
  const personRepository = connection.getCustomRepository(PersonRepository);
  const contactRepository = connection.getCustomRepository(ContactRepository);

  const serviceManager = new ServiceManager()
    .set('person', personRepository)
    .set('contact', contactRepository);

  const app = await createApp(AppController, {
    expressInstance: expressInstance,
    serviceManager: serviceManager
  });

  const httpServer = http.createServer(app);
  const port = Config.get('port', 'number', 3001);
  httpServer.listen(port, () => displayServerURL(port));
}

main()
  .catch(err => { console.error(err.stack); process.exit(1); });
