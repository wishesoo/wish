document.addEventListener('DOMContentLoaded', function () {
    const wishButton = document.querySelector('.wish-button');
    const wishMessage = document.querySelector('.wish-message');

    wishButton.addEventListener('click', function () {
        wishMessage.textContent = "Thank you so much for being born and making an appearance in my life! Wish you'll be the happiest one ever with me forever!! You're entering in your 20s. So, I hope you'll achieve everything that you dreamt of during this time just like you wished for me. And I desperately wish to celebrate your after 30s birthday together. Wish will come true, right? Until then, please take care of yourself and be healthy. I promise i'll do the same while waiting for you!!";
    });
});
