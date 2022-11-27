

const header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('fixed' , window.scrollY > 0 );
});


const navs = {
    nav: document.querySelector('.nav'),
    menu : document.querySelector('#menu-icon')
}

navs['menu'].addEventListener('click' , () => {
    navs['nav'].classList.toggle('open');
    navs['menu'].classList.toggle('bx-x');

});


window.addEventListener('scroll' , () => {
    navs['nav'].classList.remove('open');
    navs['menu'].classList.remove('bx-x');

});



const gallery = {
	btn: document.querySelector('.main-btn'),
	hiddenGallery : document.querySelector('.gallery-hidden')
};

let state = false ;


gallery['btn'].addEventListener('click' , () => {
    gallery['hiddenGallery'].classList.toggle('gallery-open');
   
if(state){
gallery['btn'].innerHTML= "MORE POSTS";
state = false ;
}	else {
	gallery['btn'].innerHTML= "LESS POSTS";
state = true ;
}
	

});