import EmployeeController from "../controllers/employee-controller"
import EmployeeRepository from "../repositories/employee-repository"

import Employee from "../models/employee-model"


describe("Employee Controller",()=>{
    describe("getEmployees",()=>{
        it("Should return an array of employees", async()=>{
            const employeeList: Employee [] = [
                {
                  firstName: "Melissa",
                  lastName: "Mocker",
                  dateOfBirth: "10/01/1982",
                  jobTitle: "Software developer",
                  company: "Mock industries",
                  country: "US",
                  countryDetails: {
                    name: "United States of America",
                    currencies: [
                      {
                        code: "USD",
                        name: "United States dollar",
                        symbol: "$"
                      }
                    ],
                    languages: [
                      {
                        iso639_1: "en",
                        iso639_2: "eng",
                        name: "English",
                        nativeName: "English"
                      }
                    ],
                    timezones: [
                      "UTC-12:00",
                      "UTC-11:00",
                      "UTC-10:00",
                      "UTC-09:00",
                      "UTC-08:00",
                      "UTC-07:00",
                      "UTC-06:00",
                      "UTC-05:00",
                      "UTC-04:00",
                      "UTC+10:00",
                      "UTC+12:00"
                    ]
                  }
                }
              ]
            
            const getAll = jest.spyOn(EmployeeRepository,"getAll").mockResolvedValue(employeeList)
            const employees = await EmployeeController.getEmployees();

            expect(getAll).toBeCalledWith()
            expect(employees).toEqual(employeeList)
        }) 
    })
})