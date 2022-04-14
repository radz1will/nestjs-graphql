import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/app.config.service';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
	//const appConfigService = await app.get<AppConfigService>('AppConfigService');
	//await app.listen(appConfigService.port);
}
bootstrap();
