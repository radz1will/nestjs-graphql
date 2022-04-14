import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
class CarBindingDriverInput {
	@Field()
	car_id: string;

	@Field()
	driver_id: string;
}

@ArgsType()
export class CarBindingDriverArgs {
	@Field((type) => CarBindingDriverInput)
	input: CarBindingDriverInput;
}
