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
