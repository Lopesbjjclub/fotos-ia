const body = document.body;
        const themeButton = document.querySelector('.theme-button');
        const hamburger = document.querySelector('.hamburger');
        const navbarLinksMobile = document.querySelector('.navbar-links-mobile');

        // Change Theme
        themeButton.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            body.classList.toggle('light-theme');
        });

        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            navbarLinksMobile.classList.toggle('active');
        });

        