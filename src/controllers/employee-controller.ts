
import EmployeeRepository from "../repositories/employee-repository";
import Employee from "../models/employee-interface"
import { Get, Route } from "tsoa";


@Route('employees')
class EmployeeController {
   
    @Get("/")
    public async getEmployees(): Promise<Employee []> {
       return EmployeeRepository.getAll();
    }
}

export default new EmployeeController()