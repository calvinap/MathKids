const navMenu = document.querySelector('#nav');
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() =>{
    search.classList.toggle('active');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide")
    if (n > slides.length)
    {
        slideIndex = 1;
    }
    if (n < 1)
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

window.onscroll = function (){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}