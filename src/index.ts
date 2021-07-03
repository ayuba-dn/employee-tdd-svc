import EmployeeService from './app'
import dotenv from 'dotenv'
dotenv.config();

//Start Service
EmployeeService.start(process.env.PORT!); 
