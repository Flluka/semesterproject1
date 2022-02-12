/* This is just little js for the hamburger menu which i learn making*/
/* So what i have done here is just to get the element by class name and 0 on the array since we only want the hamburger and the nav links*/
const hamburger = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

/* This section of js is just some code which will add an event when clicking the hamburger menu and that event is the hamburger menu expanding*/
hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
