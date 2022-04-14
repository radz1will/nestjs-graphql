import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DriverService } from './driver.service';
import { Driver } from '../entities/driver.entity';
import { CreateDriverArgs } from '../common/args/create-driver.args';

@Resolver(() => Driver)
export class DriverResolver {
	constructor(private readonly driverService: DriverService) {}

	@Query((returns) => [Driver], { nullable: 'items' })
	getAllDrivers() {
		return this.driverService.getAllDrivers();
	}

	@Mutation((returns) => Driver, {
		description: 'This resolver update media',
	})
	createNewDriver(@Args() args: CreateDriverArgs) {
		return this.driverService.createDriver(args);
	}
}
