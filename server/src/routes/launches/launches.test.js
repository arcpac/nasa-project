const request = require("supertest")
const app = require("../../app")
describe("Test GET /launches API", () => {
    test("Display all launches status 200", async () => {
        const response = await request(app).get("/launches").expect(200);
    })
})

describe("Test POST /launch", () => {
    test("create launch status 200", async () => {

    })
    test("It should catch invalid dates", () => {
        const response = 400;
    })
    test("It should catch missing fields", () => {
        const response = 400;
    })
})