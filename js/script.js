document.addEventListener("DOMContentLoaded", function () {
  console.log("hello world");

  const myName = "Jonas Singh";
  const h1 = document.querySelector(".heading-primary");
  console.log(myName);
  console.log(h1);

  // h1.addEventListener("click", function () {
  //   h1.textContent = myName;
  //   h1.style.backgroundColor = "red";
  //   h1.style.padding = "5rem";
  // });

  // Set current Year
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  yearEl.textContent = currentYear;

  //make bile navigation work
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });

  ////////////////////////////////////////////////////////////////////////
  //SMOOTH SCROLLING ANIMATION
  //////////////////////////////////////////////////////////////////////////////////////

  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll back to top
      if (href === "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      // Scroll to other links
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile naviagtion
      if (link.classList.contains("main-nav-link"))
        headerEl.classList.toggle("nav-open");
    });
  });
  // Fixing flexbox gap property missing in some Safari versions
  function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
});
