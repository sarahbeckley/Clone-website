var slideIndex = 0;
slideShow();

// Variable for mobile nav list burger
var burgerMenu = document.querySelector(".burger");

// Variable for main site logo
var logo = document.querySelector(".logo");

// Variable for small device nav list
var mobileNav = document.querySelector(".nav-pg");

// Show navPage on burber click
document.querySelector(".burger").addEventListener(
  "click",
  (showNav = () => {
    document.querySelector(".nav-pg").style.display = "block";
    burgerMenu.style.display = "none";
    logo.style.display = "none";
  })
);

// Change navBar on scroll
window.onscroll = function navChange() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    const nav = document.getElementById("nav");
    nav.style.background = "rgba(20,20,20,0.5)";
    nav.style.padding = "0.5rem";
    nav.addEventListener(
      "mouseover",
      (darken = () => {
        nav.style.background = "rgba(20,20,20,0.8)";
      })
    );
    nav.addEventListener(
      "mouseout",
      (lighten = () => {
        nav.style.background = "rgba(20,20,20,0.5)";
      })
    );
  } else {
    nav.style.background = "transparent";
    nav.style.padding = "1.5rem";
  }
};
// Scroll to first section on DOM load
window.addEventListener(
  "DOMContentLoaded",
  (setScroll = (event) => {
    const sectionOne = document.getElementById("section-one");
    sectionOne.scrollIntoView();
  })
);

// Scroll home on small device
document.querySelector("#mobile-home").addEventListener("click", () => {
  logo.style.display = "inline-block";
  burgerMenu.style.display = "inline-block";
  mobileNav.style.display = "none";
  const mobileHome = document.querySelector("#showcase");
  mobileHome.scrollIntoView();
});

// Scroll to Home
document.querySelector("#home").addEventListener("click", () => {
  const home = document.querySelector("#showcase");
  home.scrollIntoView();
});

document.querySelector(".logo").addEventListener("click", () => {
  const home = document.getElementById("showcase");
  home.scrollIntoView();
});

// Scroll to about on small device
document.querySelector("#mobile-about").addEventListener("click", () => {
  logo.style.display = "inline-block";
  burgerMenu.style.display = "inline-block";
  mobileNav.style.display = "none";
  const mobileAbout = document.querySelector("#section-one");
  mobileAbout.scrollIntoView();
});

// Scroll to about
document.getElementById("about").addEventListener("click", scrollAbout);
function scrollAbout() {
  document.getElementById("section-one").scrollIntoView();
}

// Scroll to services on small device
document.querySelector("#mobile-service").addEventListener("click", () => {
  logo.style.display = "inline-block";
  burgerMenu.style.display = "inline-block";
  mobileNav.style.display = "none";
  const mobileServices = document.querySelector("#services");
  mobileServices.scrollIntoView();
});

// Scroll to services
document.getElementById("service").addEventListener("click", () => {
  const services = document.getElementById("services");
  services.scrollIntoView();
});

// Scroll to portfolio on small device
document.querySelector("#mobile-portfolio").addEventListener("click", () => {
  logo.style.display = "inline-block";
  burgerMenu.style.display = "inline-block";
  mobileNav.style.display = "none";
  const mobilePortfolio = document.querySelector("#projects");
  mobilePortfolio.scrollIntoView();
});

// Scroll to portfolio
document.getElementById("portfolio").addEventListener("click", () => {
  const portfolio = document.getElementById("projects");
  portfolio.scrollIntoView();
});

// Scroll to contact on small device
document.querySelector("#mobile-contact").addEventListener("click", () => {
  logo.style.display = "inline-block";
  burgerMenu.style.display = "inline-block";
  mobileNav.style.display = "none";
  const mobilecontact = document.querySelector("#form");
  mobilecontact.scrollIntoView();
});

// Scroll to contact
document.getElementById("contact").addEventListener("click", () => {
  const contact = document.getElementById("form");
  contact.scrollIntoView();
});

// Thank you message on submit
document.querySelector("#submit").addEventListener(
  "click",
  (thankYou = (event) => {
    const nameInput = document.querySelector("#name").value;
    const emailInput = document.querySelector("#email").value;
    const messageArea = document.querySelector("#message");
    const formFields = document.querySelector(".form");
    if (
      nameInput.trim() === "" ||
      emailInput.trim() === "" ||
      messageArea.trim() === ""
    ) {
      document.querySelector(".error").style.display = "inline-block";
    } else {
      document.querySelector(".success").style.display = "inline-block";
      formFields.style.display = "none";
    }
    event.preventDefault();
  })
);

/*/ Listen for scroll
window.addEventListener("scroll", scrollLocation);
// HeaderOne appears on scroll
function scrollLocation() {
  var yOffSet = window.pageYOffset;
  //Header__ Section one
  var headerOne = document.querySelector(".header-one");
  var viewHeaderOne = (headerOne.style.opacity = 1);
  viewHeaderOne += headerOne.style.transition = "opacity 3s";
  //Header__ Section two
  var headerTwo = document.querySelector(".header-two");
  var viewHeaderTwo = (headerTwo.style.opacity = 1);
  viewHeaderTwo += headerTwo.style.transition = "opacity 1s";
  //Header__ Section two
  var headerThree = document.querySelector(".header-three");
  var viewHeaderThree = (headerThree.style.opacity = 1);
  viewHeaderThree += headerThree.style.transition = "opacity 1s";

  console.log(yOffSet);
  if (yOffSet >= 120 && yOffSet <= 499) {
    viewHeaderOne;
    headerTwo.style.opacity = 0;
    headerThree.style.opacity = 0;
  } else if (yOffSet >= 500 && yOffSet <= 1899) {
    viewHeaderOne;
    viewHeaderTwo;
    headerThree.style.opacity = 0;
  } else if (yOffSet >= 1900 && yOffSet <= 3000) {
    viewHeaderOne;
    viewHeaderTwo;
    viewHeaderThree;
  } else {
    headerOne.style.opacity = 0;

    headerTwo.style.opacity = 0;
    headerThree.style.opacity = 0;
  }
}*/
// Go back an img
document.querySelector(".previous").addEventListener(
  "click",
  (back = (event) => {
    slideIndex - 1;
  })
);

// Go forward an img
document.querySelector(".next").addEventListener(
  "click",
  (next = (event) => {
    slideIndex + 1;
  })
);

function slideShow() {
  var i;

  var slides = document.getElementsByClassName("img");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(slideShow, 4000);
}
