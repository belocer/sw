window.addEventListener('load', () => {
    let spaceship = document.querySelector('.spaceship');
    let i = true;
    setInterval(() => {
        if (i) {
            spaceship.style.background = 'url("https://googleman.ru/sw/img/dest/vader.webp") center center no-repeat no-repeat';
            spaceship.style.backgroundSize = 'contain';
            spaceship.style.offsetPath = 'path(M273.037 780C273.037 780 -87.6016 610.218 21.5919 599.463C130.785 588.707 351.677 644.021 401.265 599.463C450.853 554.904 94.2206 551.831 112.253 521.102C130.285 490.372 394.753 513.419 337.652 490.372C280.551 467.324 133.791 483.458 171.858 463.483C209.926 443.509 247.993 450.423 257.009 426.607C266.025 402.792 257.009 1 257.009 1)';
            i = false;
        } else {
            spaceship.style.background = 'url("https://googleman.ru/sw/img/dest/sokol.webp") center center no-repeat no-repeat';
            spaceship.style.backgroundSize = 'contain';
            spaceship.style.offsetPath = 'path(M238.5 686C238.5 686 -85.1935 592.755 24 582C133.194 571.245 371.677 598.021 421.265 553.463C470.853 508.904 69.9681 537.73 88 507C106.032 476.27 414.753 467.419 357.652 444.372C300.551 421.324 94.4325 442.474 132.5 422.5C170.567 402.526 267.993 404.423 277.009 380.607C286.025 356.792 45 0.5 45 0.5)';
            i = true;
        }

    }, 15000)
})