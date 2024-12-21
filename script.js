// Select the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Add an event listener to the button
themeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle('dark-mode');

    // Save the current theme to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check the saved theme from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Apply Material Design-inspired shadow effect to elements on page load
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        section.style.borderRadius = '8px';
        section.style.padding = '16px';
        section.style.backgroundColor = 'white';
    });

    if (document.body.classList.contains('dark-mode')) {
        sections.forEach(section => {
            section.style.backgroundColor = '#1e1e1e';
            section.style.color = '#e0e0e0';
        });
    }
});
