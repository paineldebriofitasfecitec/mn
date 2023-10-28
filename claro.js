const book = document.querySelector('.book');
const pages = document.querySelectorAll('.book-page');
const pageTurnButton = document.querySelector('.page-turn-button');
let currentPage = 0;

pageTurnButton.addEventListener('click', function() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.transform = 'translateX(-100%)';
        currentPage++;
    }
});
