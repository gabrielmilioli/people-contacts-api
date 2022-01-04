// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from '.';
import { ContactType } from './contactType.enum';

@Entity()
export class Contact extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  value: string;

  @Column('tinyint', { default: ContactType.PHONE })
  type: ContactType;

  @ManyToOne(() => Person, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_person' })
  person: Person;

}
