import express, {Application} from "express"
import {EmployeeRoutes} from "./routes/employee-routes"
import swaggerUi from "swagger-ui-express";


class EmployeeService {
    private app: Application
    private version: String = '/api/v1'
    constructor(){
        this.app = express()
        this.app.use(express.static("public"));
        this.app.use(
            "/docs",
            swaggerUi.serve,
            swaggerUi.setup(undefined, {
              swaggerOptions: {
                url: "/swagger.json",
              },
            })
          );
        this.initializeRoutes()
    }
    
    //add all routes to the App here
    private initializeRoutes(){
       new EmployeeRoutes(this.app);
       this.app.route(`${this.version}/`)
        .get(async (req: express.Request, res: express.Response) => {
              return res.status(200).send(`Employee service running on port ${process.env.PORT!}`);
        })
    }
 
    start(port: Number|String){
        return this.app.listen(port, () => {
            console.log(`employee service running on port ${port}`);
        });
    }

    getAppInstance(){
       return this.app
    }

    getVersion(){
        return this.version
    }
}

export default new EmployeeService();
