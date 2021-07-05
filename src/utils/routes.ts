import express, {Application} from "express";
export abstract class RoutesHelper {
    app: Application;
  
    constructor(app: Application) {
        this.app = app;
        this.setUpRoutes();
    }
    
    abstract setUpRoutes(): Application;

}