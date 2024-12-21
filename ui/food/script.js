document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // Use the viewport
        threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Add 'show' class
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });
});

const header = document.querySelector('.header');
document.querySelector('.btn-mobile-nav').addEventListener('click', function() {
    header.classList.toggle('nav-open');
});

// Smooth scroll
document.querySelectorAll("a:link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({ top: 0, behavior: "smooth" });
    if (href !== "#" && href.startsWith("#"))
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    if (link.classList.contains("header-nav-link"))
      header.classList.toggle("nav-open");
  });
});

// Sticky nav
const hero = document.querySelector('.hero-section');
const observer = new IntersectionObserver(function(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) document.body.classList.add('sticky');
    else document.body.classList.remove('sticky');
}, {
    root: null, // Inside view port
    threshold: 0, // 0% of hero is in view port
    rootMargin: '-80px' // Height of the navbar to prevent interfering with the next section
});
observer.observe(hero);

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
