// Scroll to sections
document.querySelectorAll('.navbar__list a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        });
    });
});

// Placeholder for form submission handling
document.querySelector('.contact__form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
});

