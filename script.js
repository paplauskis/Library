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
}
//flips read status
Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
};

function addBookToLibrary() {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
  
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const pagesValue = pages.value.trim();
    
    const newBook = new Book(titleValue, authorValue, pagesValue);
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
    books.classList.add('book');
    books.style.whiteSpace = 'pre-line';
    books.textContent = `Title:  ${book.title}\nAuthor:  ${book.author}\nPages:  ${book.pages}`;

    const removeBookButton = document.createElement('button');
    removeBookButton.classList.add('remove-book');

    const toggleStatusButton = document.createElement('button');
    toggleStatusButton.classList.add('toggle-status');
    toggleStatusButton.textContent = book.read ? 'Mark as not read' : 'Mark as read';
    toggleStatusButton.style.borderTopColor = book.read ? 'rgb(147, 255, 147)' : 'rgb(255, 136, 136)';
    
    const gridDiv = document.querySelector('.container');
    //toggles Book read/not read status
    toggleStatusButton.addEventListener('click', () => {
      book.toggleReadStatus();
      toggleStatusButton.textContent = book.read ? 'Mark as not read' : 'Mark as read';
      toggleStatusButton.style.borderTopColor = book.read ? 'rgb(147, 255, 147)' : 'rgb(255, 136, 136)';
    });

    books.appendChild(toggleStatusButton);
    books.appendChild(removeBookButton);
    gridDiv.appendChild(books);
    newBookButton.textContent = 'Add Book';
    //removes a book on click
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