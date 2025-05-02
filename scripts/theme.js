document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const themeStylesheet = document.getElementById('themeStylesheet');

    function updateThemeToggleText() {
        if (themeStylesheet.getAttribute('href') === '../styles/style_dark.css') {
            themeToggle.innerText = '☀️';
        } else {
            themeToggle.innerText = '🌙';
        }
    }

    const observer = new MutationObserver(updateThemeToggleText);
    observer.observe(themeStylesheet, { attributes: true, attributeFilter: ['href'] });

    updateThemeToggleText();
});

document.getElementById('themeToggle').addEventListener('click', function () {
    let themeLink = document.getElementById('themeStylesheet');
    if (themeLink.getAttribute('href') === '../styles/style.css') {
        themeLink.setAttribute('href', '../styles/style_dark.css');
    } else {
        themeLink.setAttribute('href', '../styles/style.css');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const numStars = 150;
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    document.body.appendChild(starsContainer);

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.width = Math.random() * 3 + 1 + "px";
        star.style.height = star.style.width;
        star.style.animationDuration = (Math.random() * 2 + 1) + "s";
        
        starsContainer.appendChild(star);
    }

    for (let i = 0; i < numStars; i++) {
        createStar();
    }
});
