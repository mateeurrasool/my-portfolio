document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#4f46e5"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4f46e5",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

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
    
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    function updateActiveNavItem() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavItem);
    // Initialize active nav item on page load
    updateActiveNavItem();
    
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
    
    // Form submission with Formspree
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Submit the form data to Formspree
            fetch(this.action, {
                method: this.method,
                body: new FormData(this),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    alert('Thank you for your message! I will get back to you soon on Email.');
                    this.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                alert('There was a problem sending your message. Please try again later.');
                console.error('Error:', error);
            });
        });
    }
    
    // Project Galleries
    const projectGalleries = document.querySelectorAll('.project-gallery');
    
    projectGalleries.forEach(gallery => {
        const container = gallery.querySelector('.gallery-container');
        const slide = gallery.querySelector('.gallery-slide');
        const images = gallery.querySelectorAll('.gallery-image');
        const prevBtn = gallery.querySelector('.prev-btn');
        const nextBtn = gallery.querySelector('.next-btn');
        const dotsContainer = gallery.querySelector('.gallery-dots');
        
        let currentIndex = 0;
        const imageCount = images.length;
        const imageWidth = 100; // Percentage
        
        // Create dots
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('gallery-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            dotsContainer.appendChild(dot);
        });
        
        // Update dots
        function updateDots() {
            const dots = dotsContainer.querySelectorAll('.gallery-dot');
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Go to specific slide
        function goToSlide(index) {
            currentIndex = index;
            slide.style.transform = `translateX(-${currentIndex * imageWidth}%)`;
            updateDots();
        }
        
        // Next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % imageCount;
            slide.style.transform = `translateX(-${currentIndex * imageWidth}%)`;
            updateDots();
        }
        
        // Previous image
        function prevImage() {
            currentIndex = (currentIndex - 1 + imageCount) % imageCount;
            slide.style.transform = `translateX(-${currentIndex * imageWidth}%)`;
            updateDots();
        }
        
        // Button events
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                if (e.key === 'ArrowRight') {
                    nextImage();
                } else if (e.key === 'ArrowLeft') {
                    prevImage();
                }
            }
        });
        
        // Initialize
        updateDots();
    });
    
    // Lightbox functionality
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');
    const prevLightboxBtn = document.querySelector('.prev-lightbox-btn');
    const nextLightboxBtn = document.querySelector('.next-lightbox-btn');
    
    let lightboxImages = [];
    let currentLightboxIndex = 0;
    
    // Collect all gallery images across all projects
    document.querySelectorAll('.gallery-image').forEach((img, index) => {
        img.setAttribute('data-index', index);
        lightboxImages.push(img);
        
        img.addEventListener('click', () => {
            currentLightboxIndex = index;
            showLightboxImage();
        });
    });
    
    function showLightboxImage() {
        const img = lightboxImages[currentLightboxIndex];
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt || '';
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    // Navigation arrows
    nextLightboxBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
        showLightboxImage();
    });
    
    prevLightboxBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
        showLightboxImage();
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Click on background to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('show')) return;
        
        if (e.key === 'ArrowRight') {
            currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
            showLightboxImage();
        } else if (e.key === 'ArrowLeft') {
            currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
            showLightboxImage();
        } else if (e.key === 'Escape') {
            lightbox.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .detail-item, .skill-category, .contact-item, .service-card');
        
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
    document.querySelectorAll('.project-card, .detail-item, .skill-category, .contact-item, .service-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on page load
    animateOnScroll();
    
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
});
