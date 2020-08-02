class BookStore {
  books = new Set();

  importBooks(books) {
    books.forEach((book) => this.books.add(book));
  }

  sell(bookName) {
    const imported = this.books.has(bookName);
    if (imported) console.log(`The ${bookName} has been sold.`);
    else console.log(`The ${bookName} is not import yet.`);
  }
}

module.exports = BookStore;
