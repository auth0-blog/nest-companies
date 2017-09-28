import {Controller, Get, Post, Body} from '@nestjs/common';
import {Company} from './company';

@Controller('companies')
export class CompaniesController {

    private companies = [
        new Company("Coke", "Soda"),
        new Company("Apple", "Computers"),
        new Company("Tesla", "Cars")
    ];

    @Get()
    getCompanies() {
        return this.companies;
    }

    @Post()
    createCompany(@Body() company: Company) {
        this.companies.push(company);
    }
}
