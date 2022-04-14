import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverResolver } from './driver.resolver';
import { AppConfigModule } from '../config/app/app.config.module';
import { Driver } from '../entities/driver.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [AppConfigModule],
	providers: [DriverResolver, DriverService],
})
export class DriverModule {}
