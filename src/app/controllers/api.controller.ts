import { Context, controller, Get, Hook, HttpResponseNoContent, HttpResponseOK, Options } from '@foal/core';
import { ContactController, PersonController } from '.';

@Hook(() => response => {
  response.setHeader('Access-Control-Allow-Origin', '*');
})
export class ApiController {
  subControllers = [
    controller('/person', PersonController),
    controller('/contact', ContactController),
  ];

  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK('Hello world!');
  }

  @Options('*')
  options(ctx: Context) {
    const response = new HttpResponseNoContent();
    response.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    return response;
  }

}
