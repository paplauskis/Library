let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function() {
    return `${this.title} by ${this.author}\n${this.pages} pages\n${this.read}`;
  }
}

function addBookToLibrary() {
  // const title = prompt('Enter the title of the book:');
  // const author = prompt('Who is the author of this book?');
  // const pages = parseInt(prompt('How many pages does the book have?'));
  // const read = confirm('Have you read this book');

  const newBook = new Book('mew', 'cat', 297, true);
  const newBookTwo = new Book('Atomic Habits', 'James Clear', 324, false);
  const newBookThree = new Book('Bubble or Revolution?', 'Bob Robson', 245, true);
  myLibrary.push(newBook);
  myLibrary.push(newBookTwo);
  myLibrary.push(newBookThree); 
}
addBookToLibrary();
// console.log(myLibrary);

function displayBooks() {
  myLibrary.forEach((book) => {
    const books = document.createElement('div');
    books.classList.add('book');
    books.style.whiteSpace = 'pre-line';
    books.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}\nFinished reading: ${book.read}`;
    const gridDiv = document.querySelector('.container');
    gridDiv.appendChild(books);
  })
  
}
displayBooks();

const form = document.querySelector('.form');
form.style.display = 'none'
const newBookButton = document.querySelector('.new-book');
newBookButton.addEventListener('click', () => {
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else form.style.display = 'none';
});
