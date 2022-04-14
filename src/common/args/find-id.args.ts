import { ArgsType, Field, ID, InputType } from '@nestjs/graphql';

@InputType()
class FindIdInput {
	@Field()
	id: number;
}

@ArgsType()
export class FindIdArgs {
	@Field((type) => FindIdInput)
	input: FindIdInput;
}
