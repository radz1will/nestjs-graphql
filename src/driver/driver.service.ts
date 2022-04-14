import { BadRequestException, Injectable } from '@nestjs/common';
import { Driver } from '../entities/driver.entity';
import { AppConfigService } from '../config/app/app.config.service';
import { CreateDriverArgs } from '../common/args/create-driver.args';

@Injectable()
export class DriverService {
	constructor(private readonly appConfigService: AppConfigService) {}

	async getAllDrivers(): Promise<Driver[]> {
		const drivers = await Driver.find();
		return drivers;
	}

	async createDriver(args: CreateDriverArgs): Promise<Driver> {
		const { input } = args;

		const driver = new Driver();
		driver.fullName = input.fullName;
		try {
			await driver.save();
		} catch (e) {
			const message = this.appConfigService.isProduction
				? 'Unable to save error'
				: e.message;

			throw new BadRequestException(message);
		}
		return driver;
	}
}
