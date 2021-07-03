
import EmployeeRepository from "../repositories/employee-repository";
import Employee from "../models/employee-model"



class EmployeeController {
    public async getEmployees(): Promise<Employee []> {
       return EmployeeRepository.getAll();
    }
}

export default new EmployeeController()