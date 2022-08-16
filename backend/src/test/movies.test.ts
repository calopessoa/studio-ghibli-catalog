import { app } from "../app";
import request from "supertest";
import { allMockedMovies, paginateMovies } from "../mocks";
import { repository, repository1 } from "../modules/movies/movies.integration";

describe("Integration test for getAll movies route", () => {
  beforeEach(() => {
    jest.spyOn(repository, "getAll").mockResolvedValue(allMockedMovies);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should successfully return all movies!", async () => {
    const response = await request(app).get("/movies");
    expect(response.body).toStrictEqual(allMockedMovies);
    expect(response.status).toBe(200);
  });
  it("should throw an error.", async () => {
    const response = await request(app).get("/films");
    expect(response.body).toStrictEqual({});
    expect(response.status).toBe(404);
  });
});

describe("test for pagination route", () => {
  beforeEach(() => {
    jest.spyOn(repository1, "getFirstTen").mockResolvedValue(paginateMovies);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should successfully return a list of 10 movies", async () => {
    const response = await request(app).get("/movies/first");
    expect(response.body.length).toBe(10);
    expect(response.status).toBe(200);
  });
  it("didn't bring the exact amount of movies", async () => {
    const response = await request(app).get("/movies/third");
    expect(response.body.length).not.toBe(10);
  });
  it("should return no more than 10 movies", async () => {
    const response = await request(app).get("/movies/first");
    expect(response.body.length).not.toBeGreaterThan(10);
  });
});
