document.querySelectorAll('.readMoreButton').forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = './book_page.html';
    });
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

function bookSearch() {
    var searchQuery = "harry potter";
    var apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + encodeURIComponent(searchQuery);

    $.ajax({
        url: apiUrl,
        dataType: "json",
        type: 'GET',
        success: function(data) {
            if (!data || !data.items || data.items.length === 0) {
                console.error("No data received from Google Books API or no items found.");
                return;
            }
            console.log("Data received from Google Books API:", data);
            displayResults(data.items);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching data from Google Books API:", error);
        }
    });
}