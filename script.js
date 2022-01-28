document.addEventListener("DOMContentLoaded", function () {
  const bookList = document.querySelector("#book-list ul");
  const addForm = document.forms["add-book"];
  const hideBooks = document.querySelector("#hide");
  const booksLabel = document.querySelector("#add-book label");
  const searchBar = document.forms["search-books"].querySelector("input");
  const tabs = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panels");

  //step 1 - delete books
  bookList.addEventListener("click", function (e) {
    if (e.target.className === "delete") {
      const li = e.target.parentElement;
      bookList.removeChild(li);
    }
  });

  //step 2 - add books to page
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    //create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBook = document.createElement("span");
    //add text content and classes
    bookName.textContent = value;
    bookName.classList.add("name");
    deleteBook.textContent = "delete";
    deleteBook.classList.add("delete");
    //append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBook);
    bookList.appendChild(li);
  });

  //step 3 - hide books
  hideBooks.addEventListener("change", function (e) {
    if (hideBooks.checked) {
      bookList.style.display = "none";
      booksLabel.textContent = "Show all books";
    } else {
      bookList.style.display = "initial";
      booksLabel.textContent = "Hide all books";
    }
  });

  //step 4 - search through books
  searchBar.addEventListener("keyup", function (e) {
    const term = e.target.value.toLowerCase();
    const books = bookList.getElementsByTagName("li");
    Array.from(books).forEach(function (book) {
      const title = book.firstElementChild.textContent.toLowerCase();
      if (title.indexOf(term) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });

  //step 5 - tabbed content
  tabs.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function (panel) {
        if (panel === targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }
  });
});