let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav');


menu.addEventListener('click' , () => {
    nav.classList.toggle('active')
    menu.classList.toggle('ac')
});

window.addEventListener('scroll' , () => {
    nav.classList.remove('active');
    menu.classList.remove('ac')
});





