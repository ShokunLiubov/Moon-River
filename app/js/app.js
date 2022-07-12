// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

 import {tns} from '~/node_modules/tiny-slider/dist/tiny-slider.js';


document.addEventListener("DOMContentLoaded", () => {
  // MENU-BUTTON

  let header__burger = document.querySelector(".toggle_button");
  let header_menu = document.querySelector(".menu-button");
  let back = document.querySelector("body");
  let header__list = document.querySelector(".menu-button");

  header__burger.onclick = function () {
    header__burger.classList.toggle("active");
    header_menu.classList.toggle("active");
    back.classList.toggle("lock");
  };

  // header__list.onclick = function () {
  // header__list.classList.remove('active');
  // // back.classList.toggle('lock');
  // }

  //ACTIVE
  let menu_buttons = document
    .querySelectorAll(".main-menu__item")
    .forEach((element) =>
      element.addEventListener("click", function (e) {
        let menu_buttons = document
          .querySelectorAll(".main-menu__item")
          .forEach((element) => element.classList.remove("main-menu__item_active"));
        element.classList.add("main-menu__item_active");
      })
    );

    // Показать еще в menu

  $(".yet__button").click(function(){
    $(".yet__button").toggleClass("yet__button_active");
  });
  


	let slider = tns({
		"container": '.my-slider',
		"autoWidth": true,
  		"items": 4,
  		"gutter": 25,
  		"mouseDrag": true,
  		"swipeAngle": false,
  		"speed": 400,
		navPosition: 'bottom',
		controlsPosition: 'bottom',
		prevButton: '.prev',
		nextButton: '.next',
		nav: true
		
	  });

    // 
    $(document).ready(function() {
      //прикрепляем клик по заголовкам acc-head
      $('.accordeon .acc-head').on('click', f_acc);
    });
    
    function f_acc(){
    //скрываем все кроме того, что должны открыть
      $('.accordeon .acc-body').not($(this).next()).slideUp(1000);
    // открываем или скрываем блок под заголовоком, по которому кликнули
        $(this).next().slideToggle(2000);
    }


	
});
