import {Application} from "express"
import supertest  from "supertest";
import EmployeeApp from "../app"
import EmployeeController from "../controllers/employee-controller";



const app: Application = EmployeeApp.getAppInstance()


describe('EmployeeRoutes', ()=>{

    describe('GET /employees',()=>{
        it('Should call EmployeeController.getEmployees',async ()=>{
            await supertest(app).get("/api/v1/employees");
            const spy = jest.spyOn(EmployeeController,'getEmployees').mockResolvedValue([])
            expect(spy).toBeCalled()
        })
    })
    
})


