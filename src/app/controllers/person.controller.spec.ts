// std
// 3p
import { Context, createController, getHttpMethod, getPath } from '@foal/core';
import { strictEqual } from 'assert';
// App
import { PersonController } from './person.controller';



describe('PersonController', () => {

  let controller: PersonController;

  beforeEach(() => controller = createController(PersonController));

  describe('has a "foo" method that', () => {

    it('should handle requests at GET /.', () => {
      strictEqual(getHttpMethod(PersonController, 'foo'), 'GET');
      strictEqual(getPath(PersonController, 'foo'), '/');
    });

    it('should return an HttpResponseOK.', () => {
      const ctx = new Context({});
      // ok(isHttpResponseOK(controller.foo(ctx)));
    });

  });

});
