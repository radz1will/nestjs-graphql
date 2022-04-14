import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MysqlConfigService {
	constructor(private readonly configService: ConfigService) {}

	get TYPEORM_USERNAME() {
		return this.configService.get<string>('data.mysql.TYPEORM_USERNAME');
	}
	get TYPEORM_PASSWORD() {
		return this.configService.get<string>('data.mysql.TYPEORM_PASSWORD');
	}
	get TYPEORM_DATABASE() {
		return this.configService.get<string>('data.mysql.TYPEORM_DATABASE');
	}
}
