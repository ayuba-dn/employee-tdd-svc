import express, {Application} from 'express';
export abstract class RoutesHelper {
    app: express.Application;
    prefix = '/api/v1';
    constructor(app: Application) {
        this.app = app;
        this.setUpRoutes();
    }
    
    abstract setUpRoutes(): express.Application;

}