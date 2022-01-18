export default class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(elem) {
    const books = Store.getBooks();
    if (books.length === 1) {
      books.pop();
    } else {
      books.splice(parseInt(elem.id), 1);
    }

    localStorage.setItem('books', JSON.stringify(books));
  }
}
