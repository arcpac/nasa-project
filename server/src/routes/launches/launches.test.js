const request = require("supertest")
const app = require("../../app")
describe("Test GET /launches API", () => {
    test("Display all launches status 200", async () => {
        const response = await request(app).get("/launches").expect(200);
    })

})

describe("Test POST /launch", () => {
    const mission = "USS"
    const rocket = "Rocket 1"
    const target = "Kepler-186 f"
    const launchDate = "January 4, 2023"
    const completeLaunchData = {
        mission: mission,
        rocket: rocket,
        target: target,
        launchDate: launchDate,
    }
    const withoutLaunchDateData = {
        mission: mission,
        rocket: rocket,
        target: target,
    }

    test("create launch status 200", async () => {
        const response = await request(app)
            .post("/launches")
            .send(completeLaunchData)
            .expect(201)

        const requestDate = new Date(completeLaunchData.launchDate).valueOf()
        const responseDate = new Date(response.body.launchDate).valueOf()

        expect(responseDate).toBe(requestDate)
        expect(response.body).toMatchObject(withoutLaunchDateData)
    })
    test("It should catch invalid dates", () => {
        const response = 400;
    })
    test("It should catch missing fields", async () => {
        const response = await request(app)
            .post("/launches")
            .send(withoutLaunchDateData)
            .expect(400)
        expect(response.body).toStrictEqual({
            error: "Missing required fields."
        })
    })
})