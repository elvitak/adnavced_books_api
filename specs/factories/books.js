module.exports = (factory, Models) => {
  factory.define("Book", Models.Book, {
    title: "My awesome book",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
