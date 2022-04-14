import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './cars/car.module';
import { DriverModule } from './driver/driver.module';
import { join } from 'path';
import {MysqlConfigService} from "./config/data/mysql/mysql.service";

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
		// TypeOrmModule.forRootAsync({
		// 	imports: [MysqlConfigService],
		// 	inject: [MysqlConfigService],
		// 	useFactory: async (mysqlConfigService: MysqlConfigService) => ({
		// 		type: 'mysql',
		// 		host: 'localhost',
		// 		port: 3306,
		// 		username: mysqlConfigService.TYPEORM_USERNAME,
		// 		password: mysqlConfigService.TYPEORM_PASSWORD,
		// 		database: ,
		// 		entities: [join(__dirname, '**/**.entity{.ts,.js}')],
		// 		synchronize: true,
		// 	}),
		// }),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: '',
			database: 'testproject',
			entities: [join(__dirname, '**/**.entity{.ts,.js}')],
			synchronize: true,
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
