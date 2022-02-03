module.exports = (factory, Models) => {
  factory.define("Author", Models.Author, {
    name: "Elvita",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
