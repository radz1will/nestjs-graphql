import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './cars/car.module';
import { DriverModule } from './driver/driver.module';
import { join } from 'path';
import { Car } from './entities/car.entity';
import { Driver } from './entities/driver.entity';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: 'schema.gql',
			debug: true,
			playground: true,
		}),
		CarModule,
		DriverModule,
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: '',
			database: 'testproject',
			entities: [Car, Driver],
			synchronize: true,
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
