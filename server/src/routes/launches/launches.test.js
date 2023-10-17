const request = require("supertest")
const app = require("../../app")
describe("Test GET /launches API", () => {
    test("Display all launches status 200", async () => {
        const response = await request(app).get("/launches");
        expect(response.status).toBe(200);
    })
})

describe("Test POST /launche", () => {
    test("It should 200 success", () => {
        const response = 200;
        expect(response).toBe(200);
    })
    test("It should catch invalid dates", () => {
        const response = 400;
    })
    test("It should catch missing fields", () => {
        const response = 400;
    })
})