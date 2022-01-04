// std
import { ok, strictEqual } from 'assert';

// 3p
import { Context, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';

// App
import { ContactController } from './contact.controller';

describe('ContactController', () => {

  let controller: ContactController;

  beforeEach(() => controller = createController(ContactController));

  describe('has a "foo" method that', () => {

    it('should handle requests at GET /.', () => {
      strictEqual(getHttpMethod(ContactController, 'foo'), 'GET');
      strictEqual(getPath(ContactController, 'foo'), '/');
    });

    it('should return an HttpResponseOK.', () => {
      const ctx = new Context({});
      ok(isHttpResponseOK(controller.foo(ctx)));
    });

  });

});
