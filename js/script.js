
window.addEventListener('DOMContentLoaded', () => {
    //hamburger
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');
        // back = document.querySelector('.back');


    menuItem.forEach(item => {
        toggleMenu(item);
    });


    function toggleMenu(element){
        element.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__list-active');
            document.body.classList.toggle('overflow');
            // back.classList.toggle('show');
            
        });

    }
    toggleMenu(hamburger);

    $(document).ready(function(){
        $('.slider').slick({
            arrows: false,
            dots: true,
            speed: 1000,
            autoplay: false,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    // Плавный скрол
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function(e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }


});