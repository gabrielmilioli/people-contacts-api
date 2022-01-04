import { Dependency } from "@foal/core";
import { Person } from "../entities";
import { PersonRepository } from "../repository/person.repository";

export class PersonService {

  @Dependency('person')
  repository: PersonRepository;

  async all(): Promise<Person[]> {
    return await this.repository.find();
  }

  async findOne(id: any): Promise<Person | undefined> {
    return await this.repository.findOne({ id: id });
  }

  async findOneThrowable(id: any): Promise<Person> {
    const entity = await this.findOne(id);

    if (!entity) {
      throw new Error(`Entity ${id} not found`);
    }

    return entity;
  }

  async save(entity: Person): Promise<Person> {
    return await this.repository.save(entity);
  }

  async remove(entity: Person): Promise<Person> {
    return await this.repository.remove(entity);
  }

}
