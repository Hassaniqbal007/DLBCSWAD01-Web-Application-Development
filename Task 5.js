

// JSON Data
let books = [
    {
        "title": "Hamlet",
        "author": "William Shakespeare",
        "year": 1603,
        "genre": "Tragedy"
    },
    {
        "title": "Macbeth",
        "author": "William Shakespeare",
        "year": 1623,
        "genre": "Tragedy"
    },
    {
        "title": "Romeo and Juliet",
        "author": "William Shakespeare",
        "year": 1597,
        "genre": "Tragedy"
    }
];

// Function to display books in the table
function displayBooks() {
    const tbody = document.querySelector("#bookTable tbody");
    tbody.innerHTML = ""; // Clear existing rows

    books.forEach((book, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.genre}</td>
            <td><button onclick="editBook(${index})">Edit</button></td>
        `;
        tbody.appendChild(row);
    });
}

// Function to update a book
document.getElementById("updateForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = parseInt(document.getElementById("year").value);
    const genre = document.getElementById("genre").value;

    // Validation
    if (!title || !author || !year || !genre) {
        alert("All fields are required!");
        return;
    }

    if (isNaN(year)) {
        alert("Year must be a valid number!");
        return;
    }

    // Find and update the book
    const index = books.findIndex(book => book.title === title);
    if (index !== -1) {
        books[index] = { title, author, year, genre };
        displayBooks();
        alert("Book updated successfully!");
    } else {
        alert("Book not found!");
    }
});

// Function to remove a book
document.getElementById("removeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("removeTitle").value;

    // Validation
    if (!title) {
        alert("Title is required!");
        return;
    }

    // Remove the book
    const index = books.findIndex(book => book.title === title);
    if (index !== -1) {
        books.splice(index, 1);
        displayBooks();
        alert("Book removed successfully!");
    } else {
        alert("Book not found!");
    }
});

// Initial display of books
displayBooks();