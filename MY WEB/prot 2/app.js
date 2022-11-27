


const header = document.querySelector('header');


window.addEventListener('scroll' ,() => {
    header.classList.toggle('fixed' , window.scrollY > 0 )
});




const navItems  = {
    nav: document.querySelector('.nav'),
    menu : document.querySelector('#menu-icon')
}; 

navItems['menu'].addEventListener('click' ,() => {
    navItems['nav'].classList.toggle('active');
    navItems['menu'].classList.toggle('bx-x');
    
});


window.addEventListener('scroll' ,() => {
    navItems['nav'].classList.remove('active');
    navItems['menu'].classList.remove('bx-x');
    
});







