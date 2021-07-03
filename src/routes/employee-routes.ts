import EmployeeController from "../controllers/employee-controller";


import { RoutesHelper } from '../utils/routes';
import express from 'express';

export class EmployeeRoutes extends RoutesHelper {
   
    constructor(app: express.Application) {
        super(app);
    }

    setUpRoutes() {
        this.app.route(`${this.prefix}/employees`)
        .get(async (req: express.Request, res: express.Response) => {
              const response = await EmployeeController.getEmployees();
              return res.send(response);
        })

        return this.app;
    }
}