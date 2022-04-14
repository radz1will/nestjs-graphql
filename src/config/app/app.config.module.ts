import * as Joi from '@hapi/joi';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './app.config';
import { AppConfigService } from './app.config.service';
import { AppEnv } from './enum/app-env.enum';

@Global()
@Module({
	imports: [
		ConfigModule.forRoot({
			load: [config],
			validationSchema: Joi.object({
				APP_ENV: Joi.string()
					.valid(...Object.values(AppEnv))
					.default(AppEnv.development),
				APP_HOST: Joi.string().ip().default('0.0.0.0'),
				APP_PORT: Joi.number().port().default(3000),
			}),
		}),
	],
	providers: [ConfigService, AppConfigService],
	exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
