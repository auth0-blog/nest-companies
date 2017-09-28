import {Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import {CompaniesController} from './companies.controller';
import {AuthenticationMiddleware} from './authentication.middleware';

@Module({
    modules: [],
    controllers: [CompaniesController]
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(AuthenticationMiddleware).forRoutes(
            { path: '/**', method: RequestMethod.ALL }
        );
    }
}
