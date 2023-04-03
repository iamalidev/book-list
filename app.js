"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("#title"),
          author = document.querySelector("#author"),
          year = document.querySelector("#year"),
          button = document.querySelector(".btn"),
          bookList = document.querySelector("#book-list"),
          form = document.querySelector("#book-form");

    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (!title.value && !author.value && !year.value) {
            alert("Please comlete all inputs!");
        } else {
            const newRow = document.createElement("tr");

            // CREATE NEW TITLE
            const newTitle = document.createElement("td");
            newTitle.innerHTML = title.value;
            newRow.appendChild(newTitle);

            // CREATE NEW AUTHOR
            const newAuthor = document.createElement("td");
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor);

            // CREATE NEW DATE
            const newDate = document.createElement("td");
            newDate.innerHTML = year.value;
            newRow.appendChild(newDate);

            bookList.appendChild(newRow);

            form.reset();
        }
    });
});