document.addEventListener("DOMContentLoaded", function() {
    let sendButton = document.getElementById('sendButton');
    sendButton.addEventListener("click", function(event) {
        event.preventDefault();
        let fullName = document.getElementById('full_name').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;
        let phone = document.getElementById('phone').value;
        let note = document.getElementById('note').value;
        console.log("Full Name: " + fullName);
        console.log("Email: " + email);
        console.log("Address: " + address);
        console.log("Phone: " + phone);
        console.log("Note: " + note);
        document.getElementById('full_name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('address').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('note').value = "";
    });
});