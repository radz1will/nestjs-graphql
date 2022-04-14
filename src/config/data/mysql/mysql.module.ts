import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { env } from 'process';
import {config} from "./mysql.config";
import {MysqlConfigService} from "./mysql.service";

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [config],
			validationSchema: Joi.object({
				MYSQL_URI: Joi.string()
					.uri()
					.default(env.MYSQL_URI || 'mysql://localhost:3306/crud'),
			}),
		}),
	],
	providers: [ConfigService, MysqlConfigService],
	exports: [ConfigService, MysqlConfigService],
})
export class MysqlConfigModule {}
