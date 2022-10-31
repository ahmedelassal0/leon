// variables
const burgerIcon = document.querySelector('.burger-icon');
const navlinks = document.querySelector('.nav-links');
// make 2nd span of the burger icon full width and appear the navlinks on clicking the burger icon
burgerIcon.addEventListener('click', () => {
    burgerIcon.children[1].classList.toggle('active');
    navlinks.classList.toggle('active');
})