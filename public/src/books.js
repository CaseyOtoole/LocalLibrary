function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id );
  return result;
}

function findBookById(books, id) {
    let result = books.find((book) => book.id === id );
    return result;
}


function partitionBooksByBorrowedStatus(books) {
  
  let booksOut = books.filter((book) => book.borrows[0].returned === false);
  let booksIn = books.filter((book) => book.borrows[0].returned === true);
  let borrowedStatus = [ booksOut, booksIn ];

  return borrowedStatus;
}

function getBorrowersForBook(book, accounts) {
  let borrowed = book.borrows
  let result = borrowed.map((status) => {
    let borrowersInfo = findAuthorById(accounts, status.id); 
    borrowersInfo.returned = status.returned;
    return borrowersInfo;
  })
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
