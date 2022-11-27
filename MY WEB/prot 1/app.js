
const header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('fixed' ,window.scrollY > 0 );
    
})

const nav = document.querySelector('.nav');
const menu = document.querySelector('#menu-icon');

menu.addEventListener('click' , () => {
    nav.classList.toggle('active');
    menu.classList.toggle('bx-x')
});

window.addEventListener('scroll', () => {
    nav.classList.remove('active');
    menu.classList.remove('bx-x')

});

