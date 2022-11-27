const header = document.querySelector('header');

window.addEventListener('scroll' , () => {
header.classList.toggle('sticky' , window.scrollY > 0 );

})


let menu = document.querySelector("#menu-icon");

let nav = document.querySelector(".nav");


menu.addEventListener('click' ,() => {
 
    nav.classList.toggle('open');
});



window.addEventListener('scroll' ,() => {
   
    nav.classList.remove('open');
});




