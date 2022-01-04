import { Dependency } from "@foal/core";
import { Contact } from "../entities";
import { ContactRepository } from "../repository/contact.repository";

export class ContactService {

  @Dependency('contact')
  repository: ContactRepository;

  async all(): Promise<Contact[]> {
    return await this.repository.find();
  }

  async findByPersonId(id: any): Promise<Contact[]> {
    return await this.repository.find({ where: { person: { id: id } } });
  }

  async findOne(id: any): Promise<Contact | undefined> {
    return await this.repository.findOne({ id: id });
  }

  async findOneThrowable(id: any): Promise<Contact> {
    const entity = await this.findOne(id);

    if (!entity) {
      throw new Error(`Entity ${id} not found`);
    }

    return entity;
  }

  async save(entity: Contact): Promise<Contact> {
    return await this.repository.save(entity);
  }

  async remove(entity: Contact): Promise<Contact> {
    return await this.repository.remove(entity);
  }

}
