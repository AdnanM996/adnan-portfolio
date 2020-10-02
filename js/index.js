const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
let menuLines = document.querySelectorAll('.menu__line');
let menuLineTop = document.querySelector('.menu__line--top');
let menuLineBottom = document.querySelector('.menu__line--bottom');
let navigationLinks = document.querySelectorAll('nav ul li a');
let logo = document.querySelector('.logo');
let heroText = document.querySelector('.hero__text');
console.log(heroText);

window.addEventListener('scroll', ()=> {
    let windowScroll = (-this.pageYOffset / 5) + 'px';

    console.log(windowScroll);

    heroText.style.transform = `translateY(${windowScroll})`;


})

menu.addEventListener('click', ()=> {
    nav.classList.toggle('nav--open');
    logo.classList.toggle('logo--white');
    menuLineTop.classList.toggle('menu__line--top--open');
    menuLineBottom.classList.toggle('menu__line--bottom--open');

    if(nav.classList.contains('nav--open')) {
        for(let i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#fff';
        }

        document.body.style.overflowY = 'hidden';

    } else {
        for(let i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#000';
        }
        
        document.body.style.overflowY = 'visible';
    }
});

for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', ()=> {
        nav.classList.remove('nav--open');
        console.log('aa');
        for(let i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#000';
        }
        document.body.style.overflowY = 'visible';
        logo.classList.remove('logo--white');
    });
};

//Footer year
let footerYear = document.querySelector('.year');
let date = new Date();
let year = date.getFullYear();

footerYear.innerText = year;
