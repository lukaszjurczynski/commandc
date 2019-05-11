const navSlide = () => {
    const burger = document.querySelector(".nav__button");
    const button = document.querySelector(".nav__button")
    const navigation = document.querySelector(".navigation");
    const navLinks = document.querySelectorAll(".navigation__list__item");

    burger.addEventListener('click', ()=>{
    //Toogle navigation
    navigation.classList.toggle('active');
    button.classList.toggle('toggle');

    //Animate links
    navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation  = `navLinkFade .5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}

navSlide();


