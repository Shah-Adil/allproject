
const header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('fixed' , window.scrollY > 0 )
});


let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');


menu.addEventListener('click' , () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
    header.classList.toggle('head');
});


window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
    header.classList.remove('head');
});




