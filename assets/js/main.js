function truncateText(text, maxLength) {
    let words = text.split(" ");
    if (words.length > maxLength) {
        return words.slice(0, maxLength).join(" ") + "...";
    }
    return text;
}

function displayResults(data) {
    let resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = "";
    for (let i = 0; i < data.items.length; i++) {
        let book = data.items[i];
        let bookId = book.id;
        let bookTitle = book.volumeInfo.title;
        let bookAuthor = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";
        let bookDescription = book.volumeInfo.description ? truncateText(book.volumeInfo.description, 30) : "No description available";
        let bookImage = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150";
        let bookHTML = `
            <div class="search_card" data-book-id="${bookId}">
                <div id="img_in_search">
                    <img src="${bookImage}" alt="">
                </div>
                <div class="words">
                    <h3>${bookTitle}</h3>
                    <span>${bookAuthor}</span>
                    <p>${bookDescription}</p>
                </div>
            </div>
        `;
        resultsContainer.innerHTML += bookHTML;
    }
}

function bookSearch() {
    let searchQuery = document.getElementById('search_input').value;
    document.getElementById('results').innerHTML = "";

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + searchQuery,
        dataType: "json",
        type: 'GET',
        success: function(data) {
            displayResults(data);
        },
        error: function() {
            console.log("Error!");
        }
    });
}

function openBookDetails(event) {
    let clickedCard = event.target.closest('.search_card');
    if (clickedCard) {
        let bookId = clickedCard.getAttribute('data-book-id');
        if (bookId) {
            let url = "readbook.html?id=" + bookId;
            window.location.href = url;
        }
    }
}
document.getElementById('search_btn').addEventListener("click", bookSearch, false);
document.getElementById('results').addEventListener("click", openBookDetails);