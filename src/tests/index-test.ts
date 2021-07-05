
import supertest from "supertest";
import EmployeeServer from "../app"
import {Application} from "express"

const app: Application = EmployeeServer.getAppInstance()

describe("GET / --> to test if service is live", () => {
    it("Return api running message", async () => {
      const response = await supertest(app).get("/");
      expect(response.text).toEqual(`Employee service running on port ${process.env.PORT!}`);
      expect(response.statusCode).toEqual(200);
    });
});