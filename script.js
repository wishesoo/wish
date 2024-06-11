document.addEventListener('DOMContentLoaded', function () {
    const wishButton = document.querySelector('.wish-button');
    const wishMessage = document.querySelector('.wish-message');

    wishButton.addEventListener('click', function () {
        wishMessage.textContent = "May all your dreams come true!";
    });
});
