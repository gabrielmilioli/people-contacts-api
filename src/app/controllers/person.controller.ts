import { Context, Delete, dependency, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseOK, Options, Post, Put } from "@foal/core";
import { Person } from "../entities";
import { PersonService } from "../services/person.service";

export class PersonController {

  @dependency
  private readonly service: PersonService;


  @Get('/')
  async all() {
    const result = await this.service.all();

    return new HttpResponseOK(result);
  }

  @Get('/:id')
  async one(ctx: Context) {
    const id = ctx.request.params.id;

    const result = await this.service.findOneThrowable(id);

    return new HttpResponseOK(result);
  }

  @Post()
  async add(ctx: Context) {
    const person: Person = ctx.request.body;

    const result = await this.service.save(person);

    return new HttpResponseCreated(result);
  }

  @Put('/:id')
  async update(ctx: Context) {
    const person: Person = ctx.request.body;
    const id = ctx.request.params.id;

    await this.service.findOneThrowable(id);

    const updated = await this.service.save(person);

    return new HttpResponseCreated(updated);
  }

  @Delete('/:id')
  async remove(ctx: Context) {
    const id = ctx.request.params.id;

    const result = await this.service.findOneThrowable(id);

    await this.service.remove(result);

    return new HttpResponseOK();
  }

  @Options('*')
  options() {
    const response = new HttpResponseNoContent();
    response.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    return response;
  }
}
