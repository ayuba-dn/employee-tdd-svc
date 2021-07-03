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
exports.EmployeeRoutes = void 0;
const employee_controller_1 = __importDefault(require("../controllers/employee-controller"));
const routes_1 = require("../utils/routes");
class EmployeeRoutes extends routes_1.RoutesHelper {
    constructor(app) {
        super(app);
    }
    setUpRoutes() {
        this.app.route(`${this.prefix}/employees`)
            .get((req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield employee_controller_1.default.getEmployees();
            return res.send(response);
        }));
        return this.app;
    }
}
exports.EmployeeRoutes = EmployeeRoutes;
