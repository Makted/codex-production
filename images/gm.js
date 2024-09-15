document.addEventListener('DOMContentLoaded', () => {
    // Open and close modals
    const loginBtn = document.getElementById('header-login-btn');
    const signupBtn = document.getElementById('header-signup-btn');
    const bookingBtn = document.getElementById('book-now-btn');

    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const bookingModal = document.getElementById('booking-modal');

    const closeLoginModal = document.getElementById('login-close');
    const closeSignupModal = document.getElementById('signup-close');
    const closeBookingModal = document.getElementById('booking-close');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'flex';
    });

    bookingBtn.addEventListener('click', () => {
        bookingModal.style.display = 'flex';
    });

    closeLoginModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    closeSignupModal.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    closeBookingModal.addEventListener('click', () => {
        bookingModal.style.display = 'none';
    });

    // Play video
    const videoBtn = document.getElementById('explore-video-btn');
    const videoSlide = document.getElementById('video-slide');

    videoBtn.addEventListener('click', () => {
        videoSlide.src = 'https://www.youtube.com/embed/YOUR_VIDEO_ID'; // Replace with your video ID
        videoSlide.parentElement.style.display = 'block';
    });
});
