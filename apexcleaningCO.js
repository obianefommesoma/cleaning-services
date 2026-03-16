document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
});



// form validation javascripts
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointmentForm');
    
    // Validation Rules
    const validators = {
        userName: (val) => val.length >= 3,
        userPhone: (val) => /^[0-9]{11,15}$/.test(val),
        userEmail: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        userService: (val) => val !== ""
    };

    // Real-time function
    const validateField = (input) => {
        const group = input.parentElement;
        const isValid = validators[input.id](input.value.trim());

        if (!isValid) {
            group.classList.add('invalid');
        } else {
            group.classList.remove('invalid');
        }
        return isValid;
    };

    // Attach "Input" listeners to every field
    const fields = ['userName', 'userPhone', 'userEmail', 'userService'];
    fields.forEach(id => {
        const element = document.getElementById(id);
        element.addEventListener('input', () => validateField(element));
    });

    // Final check on Submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isAllValid = true;

        fields.forEach(id => {
            if (!validateField(document.getElementById(id))) isAllValid = false;
        });

        if (isAllValid) {
            document.getElementById('formSuccess').style.display = 'block';
            form.reset();
            setTimeout(() => { document.getElementById('formSuccess').style.display = 'none'; }, 4000);
        }
    });
});


// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });
});



// GSAP Animations