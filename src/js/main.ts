findHref();

function findHref() {
  let menu = document.getElementById('menu');

  if (!menu) {
    return;
  }

  let links = menu.getElementsByTagName('a');
  let url = window.location.href;

  for (let i = 0; i < links.length; i++) {
    if (url === links[i].href) {
      links[i].classList.add('menu_link_active');
      break;
    }
  }
}

import { burgerMenu } from "./burger";

burgerMenu();
