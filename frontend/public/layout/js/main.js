const URLROOT = "http://localhost/reason-refuge/";
const BACK_URLROOT = URLROOT + "backend/";

(function() {
  "use strict";

  var dropdowns = document.querySelectorAll("nav .dropdown");
  if (dropdowns) {
    let li = document.querySelectorAll(".nav-item");
    var activeLi = document.getElementById("activeLi");
    for (let i = 0; i < li.length; i++) {
      if (li[i].innerText == activeLi.value) {
        li[i].classList += ' active'
      } else {
        li[i].classList = 'nav-item'
      }
    }
    [].forEach.call(dropdowns, function(dropdown) {
      var timeout = null;

      dropdown.addEventListener("mouseenter", function() {
        if (timeout) clearTimeout(timeout);
        dropdown.classList.add("show");
        dropdown.querySelector("> a").setAttribute("aria-expanded", true);
        dropdown.querySelector(".dropdown-menu").classList.add("show");
      });

      dropdown.addEventListener("mouseleave", function() {
        timeout = setTimeout(function() {
          dropdown.classList.remove("show");
          dropdown.querySelector("> a").setAttribute("aria-expanded", false);
          dropdown.querySelector(".dropdown-menu").classList.remove("show");
        }, 200);
      });
    });
  }
})();
