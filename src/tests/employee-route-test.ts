import {Application} from "express"
import supertest  from "supertest";
import EmployeeApp from "../app"
import EmployeeController from "../controllers/employee-controller";

 jest.mock("../controllers/employee-controller");


const app: Application = EmployeeApp.getAppInstance()
const request = supertest(app)

describe("EmployeeRoutes", ()=>{
    
    describe("GET /employees",()=>{
        it("Should call EmployeeController.getEmployees",async ()=>{
            const response = await request.get("/employees");
            const getEmployees = jest.spyOn(EmployeeController,"getEmployees").mockResolvedValue([])
            expect(getEmployees).toBeCalled()
            expect(response.statusCode).toEqual(200)
        })
    })

    
    
})


