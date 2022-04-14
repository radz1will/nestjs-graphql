import { Module } from '@nestjs/common';
import { AppConfigModule } from '../config/app/app.config.module';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';

@Module({
	imports: [AppConfigModule],
	controllers: [],
	providers: [CarService, CarResolver],
})
export class CarModule {}
