document.addEventListener('DOMContentLoaded', function () {
    const wishButton = document.querySelector('.wish-button');
    const wishMessage = document.querySelector('.wish-message');

    wishButton.addEventListener('click', function () {
        wishMessage.textContent = "Thank you for borning and letting me feel your existence! You're really the coolest and the best one";
    });
});
