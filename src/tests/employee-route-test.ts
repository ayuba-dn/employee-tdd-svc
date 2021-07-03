import {Application} from "express"
import supertest  from "supertest";
import EmployeeApp from "../app"
import EmployeeController from "../controllers/employee-controller";

 jest.mock('../controllers/employee-controller');


const app: Application = EmployeeApp.getAppInstance()


describe('EmployeeRoutes', ()=>{
    

    describe('GET /employees',()=>{
        it('Should call EmployeeController.getEmployees',async ()=>{
            await supertest(app).get("/api/v1/employees");
            const getEmployees = jest.spyOn(EmployeeController,'getEmployees').mockResolvedValue([])
            expect(getEmployees).toBeCalled()
        })
    })
    
})


