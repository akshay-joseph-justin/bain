
function sendToWhatsapp(){
    let number = "919497721261"; // بدون + (important)

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let url = "https://wa.me+918089571274/" + number + "?text="
    + "Name: " + encodeURIComponent(name) + "%0a"
    + "Phone: " + encodeURIComponent(phone) + "%0a"
    + "Email: " + encodeURIComponent(email) + "%0a"
    + "Message: " + encodeURIComponent(message);

    window.open(url, '_blank').focus();
}
