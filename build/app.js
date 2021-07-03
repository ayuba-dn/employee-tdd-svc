"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_routes_1 = require("./routes/employee-routes");
class EmployeeService {
    constructor() {
        this.version = '/api/v1';
        this.app = express_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        new employee_routes_1.EmployeeRoutes(this.app);
        this.app.route(`${this.version}/`)
            .get((req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.status(200).send("Employee service running on port 8000");
        }));
    }
    start(port) {
        return this.app.listen(port, () => {
            console.log(`employee service running on port ${port}`);
        });
    }
    getAppInstance() {
        return this.app;
    }
    getVersion() {
        return this.version;
    }
}
exports.default = new EmployeeService();
