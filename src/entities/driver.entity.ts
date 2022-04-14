import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
	BaseEntity,
	Column,
	Entity, JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Car } from './car.entity';

@ObjectType()
@Entity()
export class Driver extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ name: 'full_name', nullable: false })
	fullName: string;

	@ManyToMany(() => Car, (сar) => сar.driver)
	car: Car[];
}
