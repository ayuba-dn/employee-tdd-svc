
import EmployeeRepository from "../repositories/employee-repository";
import Employee from "../models/employee-model"
import { Get, Route } from "tsoa";


@Route('employee')
class EmployeeController {
   
    @Get("/")
    public async getEmployees(): Promise<Employee []> {
       return EmployeeRepository.getAll();
    }
}

export default new EmployeeController()