module.exports = (factory, Models) => {
  factory.define("Book", Models.Book, {
    title: "My awesome book",
    author: "Elvita",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
