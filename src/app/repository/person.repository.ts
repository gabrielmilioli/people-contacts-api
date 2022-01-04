import { EntityRepository, Repository } from "typeorm";
import { Person } from "../entities";

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {

}
