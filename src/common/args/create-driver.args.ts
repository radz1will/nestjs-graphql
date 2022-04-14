import { ArgsType, Field, ID, InputType } from '@nestjs/graphql';

@InputType()
class CreateDriverInput {
	@Field()
	fullName: string;
}

@ArgsType()
export class CreateDriverArgs {
	@Field((type) => CreateDriverInput)
	input: CreateDriverInput;
}
