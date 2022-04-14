import { BadRequestException, Injectable } from '@nestjs/common';
import { AppConfigService } from '../config/app/app.config.service';
import { Car } from '../entities/car.entity';
import { CreateCarArgs } from '../common/args/create-car.args';
import { FindIdArgs } from '../common/args/find-id.args';
import { CarBindingDriverArgs } from '../common/args/car-binding-driver.args';
import {Driver} from "../entities/driver.entity";

@Injectable()
export class CarService {
	constructor(private readonly appConfigService: AppConfigService) {}

	async getAllCars(): Promise<Car[]> {
		const cars = await Car.find();
		return cars;
	}

	async createCar(args: CreateCarArgs): Promise<Car> {
		const { input } = args;

		const car = new Car();
		car.brand = input.brand;
		car.model = input.model;
		try {
			await car.save();
		} catch (e) {
			const message = this.appConfigService.isProduction
				? 'Unable to save error'
				: e.message;

			throw new BadRequestException(message);
		}
		return car;
	}

	async findCarById(args: FindIdArgs): Promise<Car[]> {
		const { input } = args;
		const foundCar = await Car.find({
			where: {
				id: input.id,
			},
		});
		return foundCar;
	}

	async bindingCarWithDriver(args: CarBindingDriverArgs): Promise<Car> {
		const { input } = args;

		const currentCar = await Car.findOne({
			where: {
				id: input.car_id,
			},
		});

		if (!currentCar){
			throw new BadRequestException("Not found car");
		}

		const driver = await Driver.findOne({
			where: {
				id: input.driver_id,
			},
		});

		if (!driver){
			throw new BadRequestException("Not found driver");
		}
		try {
			currentCar.driver.push(await driver)
			await currentCar.save();
		} catch (e) {
			throw new BadRequestException(e.message);
		}
		return currentCar
	}
}
