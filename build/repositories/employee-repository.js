"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_adapter_1 = __importDefault(require("../utils/axios-adapter"));
class EmployeeRepository {
    constructor() {
        this.employees = [
            {
                "firstName": "Roy",
                "lastName": "Testerton",
                "dateOfBirth": "19/02/1990",
                "jobTitle": "Software developer",
                "company": "Test co",
                "country": "US"
            },
            {
                "firstName": "Lisa",
                "lastName": "Testora",
                "dateOfBirth": "11/07/1984",
                "jobTitle": "CTO",
                "company": "Test co",
                "country": "GBR"
            },
            {
                "firstName": "Simon",
                "lastName": "McTester",
                "dateOfBirth": "01/11/1987",
                "jobTitle": "Product manager",
                "company": "Mock industries",
                "country": "IND"
            },
            {
                "firstName": "Selina",
                "lastName": "Testo",
                "dateOfBirth": "23/11/1972",
                "jobTitle": "Software developer",
                "company": "Mock industries",
                "country": "IND"
            },
            {
                "firstName": "Tim",
                "lastName": "Mockman",
                "dateOfBirth": "12/11/1972",
                "jobTitle": "Software developer",
                "company": "Mock industries",
                "country": "IND"
            },
            {
                "firstName": "Melissa",
                "lastName": "Mocker",
                "dateOfBirth": "10/01/1982",
                "jobTitle": "Software developer",
                "company": "Mock industries",
                "country": "US"
            }
        ];
        this.filteredEmployees = [];
        this.specialRegions = ['Asia', 'Europe'];
        this.filterEmployees();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.filteredEmployees;
        });
    }
    filterEmployees() {
        this.employees.forEach(employee => {
            this.getCountry(employee);
        });
    }
    getCountry(employee) {
        axios_adapter_1.default.http.get(`/alpha/${employee.country}`).then((country) => {
            if (this.specialRegions.includes(country.data.region)) {
                employee.additionalIndentifier = employee.firstName + employee.lastName + employee.dateOfBirth;
            }
            employee.countryDetails = {
                name: country.data.name,
                currencies: country.data.currencies,
                languages: country.data.languages,
                timezones: country.data.timezones
            };
            this.filteredEmployees.push(employee);
        });
    }
}
exports.default = new EmployeeRepository();
