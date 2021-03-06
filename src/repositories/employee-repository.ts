import Employee from "../models/employee-interface"
import countriesClient from "../utils/countries-http-client"


class EmployeeRepository {
    private employees:Employee[] = [
                                    {
                                        "firstName":"Roy",
                                        "lastName":"Testerton",
                                        "dateOfBirth":"19/02/1990",
                                        "jobTitle":"Software developer",
                                        "company":"Test co",
                                        "country":"US"
                                    },
                                    {
                                        "firstName":"Lisa",
                                        "lastName":"Testora",
                                        "dateOfBirth":"11/07/1984",
                                        "jobTitle":"CTO",
                                        "company":"Test co",
                                        "country":"GBR"
                                    },
                                    {
                                        "firstName":"Simon",
                                        "lastName":"McTester",
                                        "dateOfBirth":"01/11/1987",
                                        "jobTitle":"Product manager",
                                        "company":"Mock industries",
                                        "country":"IND"
                                    },
                                    {
                                        "firstName":"Selina",
                                        "lastName":"Testo",
                                        "dateOfBirth":"23/11/1972",
                                        "jobTitle":"Software developer",
                                        "company":"Mock industries",
                                        "country":"IND"
                                    },
                                    {
                                        "firstName":"Tim",
                                        "lastName":"Mockman",
                                        "dateOfBirth":"12/11/1972",
                                        "jobTitle":"Software developer",
                                        "company":"Mock industries",
                                        "country":"IND"
                                    },
                                    {
                                        "firstName":"Melissa",
                                        "lastName":"Mocker",
                                        "dateOfBirth":"10/01/1982",
                                        "jobTitle":"Software developer",
                                        "company":"Mock industries",
                                        "country":"US"
                                    }
                                   ];
    //The add any region here to distinquish its employees with unique identifier                       
    private specialRegions:String[] = ["Asia","Europe"];
    constructor() {
        //fetch and filter employee data
        this.filterEmployees(this.employees)
    }

    
    async getAll(): Promise<Employee []> {
        return this.employees;
    }

    async filterEmployees(employees: Employee[]):Promise<Employee[]>{
        await Promise.all(employees.map(async employee=>{
            let country = await this.getCountryDetails(employee.country)
            
            //Add the employee country info field
            await this.addCountryInfo(employee,country)

           //Check for countries within the special countries array
            await this.addUniqueIdentifier(employee,country)
        }))
       return employees
   }

    async getCountryDetails(countryCode: String): Promise<any []>{
        return countriesClient.http.get(`/alpha/${countryCode}`)
    }

    addUniqueIdentifier(employee: Employee, country: any){
        if(this.specialRegions.includes(country.data.region)){
            employee.additionalIndentifier = employee.firstName+employee.lastName+employee.dateOfBirth
         }
    }

    addCountryInfo(employee: Employee, country: any){
        employee.countryDetails = {
            name: country.data.name,
            currencies: country.data.currencies,
            languages: country.data.languages,
            timezones: country.data.timezones
        }
    }
  }

  export default new EmployeeRepository()

