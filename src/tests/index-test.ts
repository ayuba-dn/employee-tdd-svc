
import supertest from "supertest";
import EmployeeServer from "../app"
import {Application} from "express"

const app: Application = EmployeeServer.getAppInstance()

describe("GET / - to test if service is live", () => {
    it("Return api running message", async () => {
      const response = await supertest(app).get("/api/v1");
      expect(response.text).toEqual(`Employee service running on port 8000`);
      expect(response.statusCode).toEqual(200);
    });
});