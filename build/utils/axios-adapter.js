"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class CountriesClient {
    constructor(baseUrl) {
        this.http = axios_1.default.create({
            baseURL: baseUrl,
        });
    }
}
exports.default = new CountriesClient('https://restcountries.eu/rest/v2');
