import { prisma } from "../prisma";
import { app } from "../app";
import request from "supertest";
import { allMockedMovies } from "../mocks";
import { repository } from "../modules/movies/movies.integration";

describe("Integration test for getAll movies route", () => {
  beforeEach(() => {
    jest.spyOn(repository, "getAll").mockResolvedValue(allMockedMovies);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should successfully return a movie!", async () => {
    const response = await request(app).get("/movies");
    expect(response.body).toStrictEqual(allMockedMovies);
    expect(response.status).toBe(200);
  });
  it("should throw an error", async () => {
    const response = await request(app).get("/films");
    expect(response.body).toStrictEqual({});
    expect(response.status).toBe(404);
  });
});

// TO DO:
// error handler middleware; OK
// error case in test; OK

// DOCS ( NOT SWAGGERRRRRRRRRRR RR   DINOSAURRRRR);
