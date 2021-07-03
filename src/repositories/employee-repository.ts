import countriesClient from '../utils/axios-adapter'
import Employee from "../models/employee-model"



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
    private specialRegions:String[] = ['Asia','Europe'];
    constructor() {
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
            if(this.specialRegions.includes(country.data.region)){
              employee.additionalIndentifier = employee.firstName+employee.lastName+employee.dateOfBirth
            }
            employee.countryDetails = {
                     name: country.data.name,
                     currencies: country.data.currencies,
                     languages: country.data.languages,
                     timezones: country.data.timezones
            }   
            this.filteredEmployees.push(employee)             
         })
    }
  }

  export default new EmployeeRepository()

