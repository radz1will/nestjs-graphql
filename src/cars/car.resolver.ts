import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Car } from '../entities/car.entity';
import { CarService } from './car.service';
import { CreateCarArgs } from '../common/args/create-car.args';
import { FindIdArgs } from '../common/args/find-id.args';
import { CarBindingDriverArgs } from '../common/args/car-binding-driver.args';

@Resolver(Car)
export class CarResolver {
	constructor(private readonly carService: CarService) {}
	@Query((returns) => [Car], { nullable: 'items' })
	getAllCars() {
		return this.carService.getAllCars();
	}

	@Mutation((returns) => Car, {
		description: 'This resolver update media',
	})
	createNewCar(@Args() args: CreateCarArgs) {
		return this.carService.createCar(args);
	}

	@Query((returns) => [Car], { nullable: 'items' })
	getCarById(@Args() args: FindIdArgs) {
		return this.carService.findCarById(args);
	}

	@Mutation((returns) => Car, {
		description: 'This resolver car binding driver',
	})
	bindingCarWithDriver(@Args() args: CarBindingDriverArgs) {
		return this.carService.bindingCarWithDriver(args);
	}
}
