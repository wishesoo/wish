document.addEventListener('DOMContentLoaded', function () {
    const wishButton = document.querySelector('.wish-button');
    const wishMessage = document.querySelector('.wish-message');

    wishButton.addEventListener('click', function () {
        wishMessage.textContent = "Thank you so much for being born and making an appearence in my life! Wish you'll be the happiest one ever with me forever.";
    });
});
