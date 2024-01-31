/*!
 * Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  //   const mainNav = document.body.querySelector("#mainNav");
  //   if (mainNav) {
  //     new bootstrap.ScrollSpy(document.body, {
  //       target: "#mainNav",
  //       offset: 74,
  //     });
  //   }

  // Collapse responsive navbar when toggler is visible
  // const navbarToggler = document.body.querySelector('.navbar-toggler');
  // const responsiveNavItems = [].slice.call(
  //     document.querySelectorAll('#navbarResponsive .nav-link')
  // );
  // responsiveNavItems.map(function (responsiveNavItem) {
  //     responsiveNavItem.addEventListener('click', () => {
  //         if (window.getComputedStyle(navbarToggler).display !== 'none') {
  //             navbarToggler.click();
  //         }
  //     });
  // });
});

// Custom mapping between sections and their corresponding navigation links
const sectionToNavLinkMap = {
  "#home": '.navbar-nav .nav-link[href="#home"]',
  "#about": '.navbar-nav .nav-link[href="#about"]',
  "#service": '.navbar-nav .nav-link[href="#service"]',
  "#portfolio": '.navbar-nav .nav-link[href="#portfolio"]',
  "#testinomial": '.navbar-nav .nav-link[href="#testinomial"]',
  "#blogs": '.navbar-nav .nav-link[href="#blogs"]',
  "#callnow": '.navbar-nav .nav-link[href="#callnow"]',
};

// JavaScript to highlight active section in navbar
window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll(".present-section");

  sections.forEach(function (section) {
    let top = section.offsetTop - 100;
    let height = section.offsetHeight;
    let sectionId = "#" + section.id;
    let navLinkSelector = sectionToNavLinkMap[sectionId];
    let navLink = document.querySelector(navLinkSelector);

    if (navLink && window.scrollY >= top && window.scrollY < top + height) {
      navLink.classList.add("active");
    } else if (navLink) {
      navLink.classList.remove("active");
    }
  });
});
