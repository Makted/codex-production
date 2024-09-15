document.addEventListener('DOMContentLoaded', function () {
    // Toggle Navigation Menu for Mobile
    const navToggle = document.querySelector('.menu-toggle'); // Updated selector
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Add items to the cart and update cart count
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            let count = parseInt(cartCount.textContent) || 0;
            count++;
            cartCount.textContent = count;
        });
    });

    // Smooth Scrolling for Anchor Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) { // Check if the target element exists
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Video Play/Pause Toggle
    const playVideoButton = document.querySelector('.play-video');
    const video = document.querySelector('video'); // Updated selector

    if (playVideoButton && video) {
        playVideoButton.addEventListener('click', function () {
            if (video.paused) {
                video.play().catch(error => {
                    console.log('Error playing the video:', error);
                });
            } else {
                video.pause();
            }
        });
    }

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Animation speed

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Calculate increment
            const increment = target / speed;

            // If current count is less than target, increment it
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Adjust delay for smoothness
            } else {
                counter.innerText = target; // Ensure exact target number is shown
            }
        };

        // Trigger the animation
        updateCount();
    });

    // Testimonial Slider Controls
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    const updateTestimonials = () => {
        testimonialItems.forEach((item, index) => {
            item.style.display = index === currentIndex ? 'block' : 'none';
        });
    };

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
            updateTestimonials();
        });

        nextBtn.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % testimonialItems.length;
            updateTestimonials();
        });

        // Initialize slider
        updateTestimonials();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                // Calculate increment
                const increment = target / 200;

                if (count < target) {
                    // Update count
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 5);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    };

    // Intersection Observer to trigger animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });

    // Video Play Button
    const playButton = document.querySelector('.play-video');
    const video = document.querySelector('.hero-video video');

    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.innerHTML = '<span>Pause Video</span>';
        } else {
            video.pause();
            playButton.innerHTML = '<span>Watch Video</span>';
        }
    });

    // Testimonial Slider
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    const showTestimonial = (index) => {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    // Initialize the first testimonial
    showTestimonial(currentIndex);
});

