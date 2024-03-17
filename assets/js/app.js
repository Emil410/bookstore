// document.getElementById("catalog_btn").addEventListener("click", function() {
//     window.location.href = "./assets/pages/catalog.html";
// });
document.addEventListener("DOMContentLoaded", function() {
    let asideMain = document.getElementById("aside_main");
    let html = document.documentElement;
    let headers = document.getElementsByTagName('header');
    document.getElementById("joinLink").addEventListener("click", function(event) {
        event.preventDefault();
        toggleAside();
    });
    document.addEventListener("click", function(event) {
        if (!asideMain.contains(event.target) && event.target.id !== "joinLink") {
            closeAside();
        }
    });

    function toggleAside() {
        if (asideMain.style.display === "none" || asideMain.style.display === "") {
            asideMain.style.display = "flex";
            html.style.backgroundColor = "#00000080";
            for (let i = 0; i < headers.length; i++) {
                headers[i].style.backgroundColor = "#00000000";
            }
        } else {
            closeAside();
        }
    }

    function closeAside() {
        asideMain.style.display = "none";
        html.style.backgroundColor = "white";
        for (let i = 0; i < headers.length; i++) {
            headers[i].style.backgroundColor = "white";
        }
    }
});