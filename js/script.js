
window.addEventListener('DOMContentLoaded', () => {
    //hamburger
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');
        // back = document.querySelector('.back');


    menuItem.forEach(item => {
        toggleMenu(item);
    });

    function checkDisplay() {
        if(window.getComputedStyle(hamburger, null).getPropertyValue("display") == 'block') {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__list-active');
            document.body.classList.toggle('overflow');
            // back.classList.toggle('show');
        }
    }
    
    function toggleMenu(element){
        element.addEventListener('click', () => {
            checkDisplay();
        });

    }
    toggleMenu(hamburger);

    $(document).ready(function(){
        $('.slider').slick({
            arrows: false,
            dots: true,
            speed: 1000,
            autoplay: true,
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

    $(document).ready(function(){
        // Добавить плавную прокрутку до всех ссылок
        $("a").on('click', function(event) {
      
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
              window.location.hash = hash;
            });
          } 
        });
      });
    


});