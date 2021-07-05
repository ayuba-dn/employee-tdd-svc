import EmployeeController from "../controllers/employee-controller";
import auth from "../middlewares/auth"
import { RoutesHelper } from "../utils/routes";
import  {Request,Response,Application} from "express";

export class EmployeeRoutes extends RoutesHelper {
   
    constructor(app: Application) {
        super(app);
    }

    setUpRoutes() {
        this.app.route("/employees")
        .get(async (req: Request, res: Response) => {
              const response = await EmployeeController.getEmployees();
              return res.send(response);
        })
        .post(auth.checkJwt,async(req:Request, res:Response)=>{
             res.status(201).send({msg: "employee created",data: {}})
        })
        

        return this.app;
    }
}