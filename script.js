let myLibrary = [];
const submitButton = document.querySelector('.add-book');
const form = document.querySelector('#book_input');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

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
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
  
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const pagesValue = pages.value.trim();
    const readValue = read.checked;
    const newBook = new Book(titleValue, authorValue, pagesValue, readValue);
    myLibrary.push(newBook);
    if (myLibrary.length > 1) myLibrary.shift();
    displayBooks();
    form.reset();
    formDiv.style.display = 'none';
  })
}
submitButton.addEventListener('click', addBookToLibrary());

function displayBooks() {
  myLibrary.forEach((book) => {
    const books = document.createElement('div');
    const removeBookButton = document.createElement('button');
    removeBookButton.classList.add('remove-book');
    books.classList.add('book');
    books.style.whiteSpace = 'pre-line';
    books.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}\nFinished reading: ${book.read}`;
    const gridDiv = document.querySelector('.container');
    books.appendChild(removeBookButton);
    gridDiv.appendChild(books);
    newBookButton.textContent = 'Add Book';
    removeBookButton.addEventListener('click', () => books.remove());
  });
};

const formDiv = document.querySelector('.form');
formDiv.style.display = 'none';
const newBookButton = document.querySelector('.new-book');
newBookButton.addEventListener('click', () => {
  if (formDiv.style.display === 'none') {
    formDiv.style.display = 'block';
    newBookButton.textContent = 'Cancel';
    form.reset();
  } else {
    formDiv.style.display = 'none';
    newBookButton.textContent = 'Add Book';
  }
});