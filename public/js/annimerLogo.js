document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.querySelector('.logo-container');
    const logoText = document.querySelector('.logo-text');

    logoContainer.addEventListener('mouseenter', function() {
        logoText.classList.add('show-text');
    });

    logoContainer.addEventListener('mouseleave', function() {
        logoText.classList.remove('show-text');
    });
});
