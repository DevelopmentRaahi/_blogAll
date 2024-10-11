var allCards = Array.from(document.querySelectorAll('.s-card'));
var allText = Array.from(document.querySelectorAll('.s-card a h3'));
var searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', (e) => {
  let searchValue = e.target.value.toLowerCase();

  allCards.forEach((card, index) => {
    let cardText = allText[index].innerText.toLowerCase();
    if (cardText.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

var carrButton = document.querySelectorAll('[href="https://domgys.in/careers.html"]')
// console.log(carrButton);
if (carrButton) {
  for (const el of carrButton) {
  el.textContent = "Career";
}
}
let mybutton = document.getElementById("btn-back-to-top");
let socialIcons = document.querySelector(".whatsap_button");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
// prevent copy pasting of text
const preventCopyPaste = (event) => {
            event.preventDefault();            
       };

document.addEventListener('copy', preventCopyPaste);
document.addEventListener('cut', preventCopyPaste);
document.addEventListener('paste', preventCopyPaste);


function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const currentYear = document.querySelector('.year');
if (currentYear) {
  currentYear.textContent = new Date(Date.now()).getFullYear();
}


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10
  ) {
    socialIcons.style.display = "block";
    mybutton.style.display = "block";
  
  } else {
    mybutton.style.display = "none";
    socialIcons.style.display = "none";
    
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// window.addEventListener('scroll', function() {
//   var navbar = document.getElementById('navbg');
//   if (window.scrollY > 50) {
//     // navbar.classList.add('bg-change_now'); 
//     navbar.style.backgroundColor = "#fff"; 
//   }
// });

/*=============== SHOW MENU ===============*/




/**

*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('#btn-back-to-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

})();
