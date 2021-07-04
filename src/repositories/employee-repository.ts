import HttpClient from '../utils/countries-http-client'
import Employee from "../models/employee-interface"
import countriesClient from '../utils/countries-http-client'


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
    private filteredEmployees: Employee[] = []   
    //The add any region here to distinquish its employees with unique identifier                       
    private specialRegions:String[] = ['Asia','Europe'];
    constructor() {
        //fetch and filter employee data
       this.filterEmployees()
    }

    
    public async getAll(): Promise<Employee []> {
        return this.filteredEmployees;
    }

    private filterEmployees(){
        this.employees.forEach(employee=>{
            this.getCountry(employee)
        })
    }

    public getCountry(employee: Employee){
        countriesClient.http.get(`/alpha/${employee.country}`).then((country: any)=>{
           //Add the additional the country details fiels
            employee.countryDetails = {
                     name: country.data.name,
                     currencies: country.data.currencies,
                     languages: country.data.languages,
                     timezones: country.data.timezones
            }  
            //Check for countries within the special countries array
            if(this.specialRegions.includes(country.data.region)){
                employee.additionalIndentifier = employee.firstName+employee.lastName+employee.dateOfBirth
            }
            //Push to final array
            this.filteredEmployees.push(employee)             
         })
    }
  }

  export default new EmployeeRepository()

