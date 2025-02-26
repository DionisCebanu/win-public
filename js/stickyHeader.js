// script for the sticky header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('#header-container');
    const handleScroll = () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
  });