const request = require('supertest')
const app = require('../../src/app')

describe('POST /create', () => {
    describe('When passed playerID, size and ranked(?)', () => {
        test("should respond with 201 Created", async () => {
            const response = await request(app).post('/create').send({
                playerID: "player",
                size: 19,
                ranked: false
            })
            expect(response.statusCode).toBe(201)
        })
    })
})