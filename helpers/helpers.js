const books = require('./books');

function getBooksBorrowedCount(books) {
    let booksCheckedOut = books.filter(book => book.borrows.filter(record => record.returned === false).length > 0);
    return booksCheckedOut.length;
}


console.table(getBooksBorrowedCount(books));
    