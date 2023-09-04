function showDetails(title, description) {
    const bookshelf = document.getElementById('bookshelf');
    const bookDetails = document.getElementById('bookDetails');
    const bookTitle = document.getElementById('bookTitle');
    const bookDescription = document.getElementById('bookDescription');

    // Hide the bookshelf
    bookshelf.style.display = 'none';

    // Set the title and description
    bookTitle.innerText = title;
    bookDescription.innerHTML = `<li>${description}</li>`;

    // Show the book details view
    bookDetails.style.display = 'block';
}

function hideDetails() {
    const bookshelf = document.getElementById('bookshelf');
    const bookDetails = document.getElementById('bookDetails');

    // Hide the book details view
    bookDetails.style.display = 'none';

    // Show the bookshelf
    bookshelf.style.display = 'flex';
}

function displayBook(bookId) {
    // First, hide all book details
    const allDetails = document.querySelectorAll('.book-details');
    allDetails.forEach(detail => detail.style.display = 'none');

    // Display the clicked book details
    const bookDetail = document.getElementById(bookId);
    bookDetail.style.display = 'block';
}
