import { Context, controller, Hook, HttpResponseNoContent, IAppController, Options } from '@foal/core';
import { ApiController } from './controllers';


@Hook(() => (response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
})
export class AppController implements IAppController {
  subControllers = [
    controller('/api', ApiController),
  ];

  @Options('*')
  options(ctx: Context) {
    const response = new HttpResponseNoContent();
    response.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    return response;
  }

}
