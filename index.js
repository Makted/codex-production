document.addEventListener('DOMContentLoaded', function () {
    // Toggle Navigation Menu for Mobile
    const navToggle = document.querySelector('.nav-toggle');
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

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

    document.getElementById("vid").addEventListener("click", function() {
      var video = document.getElementById("myVideo");
      
      if (video.paused) {
        video.play().catch(error => {
          console.log('Error playing the video:', error);
        });
      } else {
        video.pause();
      }
    });
  
// Counter animation
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