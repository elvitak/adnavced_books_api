const { expect, factory, pending, Models } = require("../helpers");
const { Association, DataTypes } = require("sequelize");
const { Author } = Models;

describe("Author", () => {
  const { tableName, tableAttributes, associations } = Author;

  beforeEach(async () => {
    subject = await factory.create("Author");
  });

  describe("Model", () => {
    it('is expected to have table name "Author"', () => {
      expect(tableName).to.equal("Authors");
    });

    describe("is expected to have property:", () => {
      it("name:STRING", () => {
        expect(tableAttributes)
          .to.have.own.property("name")
          .that.has.property("type")
          .to.be.instanceOf(DataTypes.STRING);
      });
    });

    describe("is expected to have associations", () => {
      it("Book:HasMany", () => {
        expect(associations)
          .to.have.own.property("Books")
          .to.be.instanceOf(Association.HasMany)
          .that.has.property("foreignKey", "<field>");
      });
    });
  });

  describe("Instance", () => {
    it("is expected to have a valid factory", () => {
      expect(subject).to.include({
        name: "Elvita",
      });
    });

    describe("is expected to have properties", () => {
      it("name", () => {
        expect(subject).to.have.property("name").to.be.a("string");
      });
    });

    describe("is expected to have association accessors", () => {
      it("for the Book association", () => {
        expect(subject)
          .to.respondTo("getBook")
          .and.respondTo("setBook")
          .and.respondTo("createBook");
      });
    });
  });
});
