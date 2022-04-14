import { registerAs } from '@nestjs/config';
import { env } from 'process';

export const config = registerAs('data.mysql', () => ({
	TYPEORM_USERNAME: env.TYPEORM_USERNAME,
	TYPEORM_PASSWORD: env.TYPEORM_PASSWORD,
	TYPEORM_DATABASE: env.TYPEORM_DATABASE,
}));
