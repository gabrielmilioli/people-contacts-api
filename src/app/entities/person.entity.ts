// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Contact } from '.';

@Entity()
export class Person extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Contact, contact => contact.id, { cascade: ['insert', 'update'] })
  contacts: Contact[];

}
