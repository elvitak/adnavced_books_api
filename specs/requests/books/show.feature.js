const { serverConfig, factory, expect } = require("../../helpers");

let book, response, request;

afterEach(async () => {
  await factory.cleanUp();
});

describe("GET /api/books/:id", () => {
  before((done) => {
    request = serverConfig(done);
  });

  beforeEach(async () => {
    book = await factory.create("Book", { title: "Fun with sequelize" });
    response = await request.get(`/api/books/${book.id}`);
  });

  it("is expected to respond with status 200", () => {
    expect(response.status).to.equal(200);
  });

  it("is expected to include the title", () => {
    expect(response.body["book"].title).to.equal("Fun with sequelize");
  });
});
