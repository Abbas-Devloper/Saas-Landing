

 const menuBtn = document.querySelector('.menu-btn');
        const closeBtn = document.querySelector('.close-btn');
        const navUl = document.querySelector('nav ul');

        menuBtn.addEventListener('click', function () {
            navUl.classList.add('active');
            menuBtn.style.display = 'none';
            closeBtn.style.display = 'block';
        });

        closeBtn.addEventListener('click', function () {
            navUl.classList.remove('active');
            menuBtn.style.display = 'block';
            closeBtn.style.display = 'none';
        });

















 AOS.init({
            duration: 800, // Animation duration
            easing: 'ease-in-out', // Animation easing
            once: true // Whether animation should happen only once

        });