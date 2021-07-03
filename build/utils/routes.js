"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesHelper = void 0;
class RoutesHelper {
    constructor(app) {
        this.prefix = '/api/v1';
        this.app = app;
        this.setUpRoutes();
    }
}
exports.RoutesHelper = RoutesHelper;
