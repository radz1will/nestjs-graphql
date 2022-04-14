import { Field, ObjectType } from '@nestjs/graphql';
import {
	BaseEntity,
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Driver } from './driver.entity';

@ObjectType()
@Entity()
export class Car extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ name: 'model', nullable: true })
	model?: string;

	@Column({ name: 'brand', nullable: true })
	@Field()
	brand?: string;

	@ManyToMany(() => Driver, (driver) => driver.car, {
		eager: true,
		nullable: true,
	})
	@JoinTable()
	@Field(type => [Driver])
	driver: Driver[];
}
