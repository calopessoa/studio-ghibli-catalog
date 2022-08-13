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
});

// TO DO:
// error handler middleware;
// error case in test;
// DOCS ( NOT SWAGGERRRRRRRRRRR RR   DINOSAURRRRR);
