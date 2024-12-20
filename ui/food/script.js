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
