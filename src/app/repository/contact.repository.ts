import { EntityRepository, Repository } from "typeorm";
import { Contact } from "../entities";

@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact> {

}
