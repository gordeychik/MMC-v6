document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".header__burger");
    var burgerWrapper = document.querySelector(".header__burger-wrapper");
  
    burger.addEventListener("click", function () {
      burgerWrapper.classList.toggle("header__burger-wrapper--active");
      burger.classList.toggle("header__burger--active");
    });
  });


  const tabs = document.querySelectorAll('.problem__tab');
  const tabContents = document.querySelectorAll('.problems__item');


  function switchTab(tabIndex) {
    
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });
    tabContents.forEach(function(content) {
      content.classList.remove('active');
    });

   
    tabs[tabIndex].classList.add('active');
    tabContents[tabIndex].classList.add('active');
  }

  tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function() {
      switchTab(index);
    });
  });

  switchTab(0);