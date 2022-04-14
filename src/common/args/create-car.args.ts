import { ArgsType, Field, ID, InputType } from '@nestjs/graphql';

@InputType()
class CreateCarInput {
	@Field()
	model: string;

	@Field()
	brand: string;
}

@ArgsType()
export class CreateCarArgs {
	@Field((type) => CreateCarInput)
	input: CreateCarInput;
}
