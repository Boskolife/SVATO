import { burgerMenu } from './burger';
import { findHref } from './findHref';
import { pagination } from './pagination';

burgerMenu();
findHref();
dropDownEvent();
dropDownEventMain();
pagination();

function dropDownEvent() {
  var dropdown = document.querySelector('.dropdown_btn');
  var dropdownContent = document.querySelector('.dropdown_content');

  dropdown?.addEventListener('click', function () {
    if (window.innerWidth < 768) {
      dropdown?.classList.toggle('clicked');
      dropdownContent?.classList.toggle('dropdown_content_active');
    }
  });
}

function dropDownEventMain() {
  var dropdowns = document.querySelectorAll('.archives_dropdown_btn');
  var dropdownContents = document.querySelectorAll('.dropdown_content_archives');

  dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('click', function () {
      dropdown.classList.toggle('archives_dropdown_btn_active');
      if (dropdownContents[index]) {
        dropdownContents[index].classList.toggle('dropdown_content_archives_active');
      }
    });
  });
}
