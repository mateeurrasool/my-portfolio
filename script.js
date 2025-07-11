document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Project Carousels
    const projectCarousels = document.querySelectorAll('.project-carousel');
    
    projectCarousels.forEach(carousel => {
        const container = carousel.querySelector('.carousel-container');
        const slide = carousel.querySelector('.carousel-slide');
        const images = carousel.querySelectorAll('.project-image');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        
        let currentIndex = 0;
        const imageCount = images.length;
        const imageWidth = 100; // Percentage
        
        // Initialize carousel
        function updateCarousel() {
            slide.style.transform = `translateX(-${currentIndex * imageWidth}%)`;
        }
        
        // Next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % imageCount;
            updateCarousel();
        }
        
        // Previous image
        function prevImage() {
            currentIndex = (currentIndex - 1 + imageCount) % imageCount;
            updateCarousel();
        }
        
        // Button events
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        });
        
        // Initialize
        updateCarousel();
    });
    
    // Lightbox functionality
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-content');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');
    const projectImages = document.querySelectorAll('.project-image');
    
    // Open lightbox
    projectImages.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.classList.add('show');
            lightboxImg.src = this.src;
            lightboxCaption.textContent = this.alt;
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .detail-item, .skill-category, .contact-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.project-card, .detail-item, .skill-category, .contact-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on page load
    animateOnScroll();
});