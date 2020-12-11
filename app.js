const menu = document.querySelector('.navbar-menu');

const mobileMenu = () => {
    menu.classList.toggle('active');
}

document.getElementById('mobile-menu').addEventListener('click', mobileMenu);



const home = document.querySelector('#home-page');
const about = document.querySelector('#about-page');
const services = document.querySelector('#services-page');

const highlightMenu = () => {
    let highlightedMenu = document.querySelector('.highlight');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    if(window.innerWidth>960){
        if(scrollPos<=400){
            home.classList.add('highlight');
            about.classList.remove('highlight');
        }
        if(scrollPos>400 && scrollPos<=800){
            services.classList.remove('highlight');
            home.classList.remove('highlight');
            about.classList.add('highlight');
        }
        if(scrollPos>800){
            about.classList.remove('highlight');
            services.classList.add('highlight');
        }
    }

    else if(window.innerWidth<960 && highlightedMenu){
        highlightedMenu.classList.remove('highlight');
    }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('resize', highlightMenu);

