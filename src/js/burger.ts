

export const burgerMenu = function() {
    const burger = document.querySelector('.burger_menu');
    const navMenu = document.querySelector('.menu');
    const navContainer = document.querySelector('.nav_container');

  burger?.addEventListener('click' , () => {
        burger.classList.toggle('burger_active');
        navMenu?.classList.toggle('menu_active');
        navContainer?.classList.toggle('navContainer_active');
        document.body.classList.toggle('body_lock');
  });
  

  }
  