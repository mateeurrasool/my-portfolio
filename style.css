/* Global Styles */
:root {
    --primary-color: #4f46e5;
    --primary-light: #6366f1;
    --primary-dark: #4338ca;
    --secondary-color: #10b981;
    --accent-color: #f59e0b;
    --dark-color: #0f172a;
    --darker-color: #020617;
    --dark-gray: #1e293b;
    --medium-gray: #64748b;
    --light-gray: #e2e8f0;
    --lighter-gray: #f1f5f9;
    --white: #ffffff;
    --black: #000000;
    --transition: all 0.3s ease;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.3);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.3);
    --border-radius: 8px;
    --border-radius-lg: 12px;
    --card-bg: rgba(15, 23, 42, 0.7);
    --card-border: rgba(255, 255, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: clamp(14px, 1.5vw, 16px);
    overflow-x: hidden;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--light-gray);
    background-color: var(--darker-color);
    overflow-x: hidden;
}

/* Particle Background */
#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: var(--darker-color);
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 3vw, 1.5rem);
}

section {
    padding: clamp(4rem, 8vw, 6rem) 0;
    position: relative;
    overflow: hidden;
}

h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 600;
    color: var(--white);
}

h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

h3 {
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
}

h4 {
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
}

p {
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
    color: var(--medium-gray);
    font-weight: 400;
    font-size: clamp(0.95rem, 1.1vw, 1.1rem);
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

ul {
    list-style: none;
}

.btn {
    display: inline-block;
    padding: clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.25rem, 2.5vw, 1.75rem);
    border-radius: var(--border-radius);
    font-weight: 500;
    font-size: clamp(0.9rem, 1.1vw, 1rem);
    cursor: pointer;
    transition: var(--transition);
    text-align: center;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
    min-width: clamp(100px, 12vw, 120px);
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
}

.btn:hover::before {
    opacity: 1;
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
    box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.btn-secondary {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.btn-secondary:hover {
    background-color: var(--primary-color);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
}

.section-title {
    text-align: center;
    margin-bottom: clamp(2.5rem, 5vw, 4rem);
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(60px, 8vw, 80px);
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 2px;
}

/* Animations */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: var(--primary-color) }
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes borderGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes zoomIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

/* Animation Classes */
.floating-animation {
    animation: float 6s ease-in-out infinite;
}

.pulse-animation {
    animation: pulse 2s infinite;
}

.typing-animation {
    overflow: hidden;
    border-right: 3px solid var(--primary-color);
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 2px;
    animation: 
        typing 3.5s steps(40, end),
        blink-caret 0.75s step-end infinite;
}

.animated-gradient {
    background: linear-gradient(-45deg, var(--primary-color), var(--secondary-color), var(--accent-color), var(--primary-light));
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradient 8s ease infinite;
}

/* Header Styles */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(2, 6, 23, 0.95);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    backdrop-filter: blur(10px);
}

header.scrolled {
    background-color: rgba(2, 6, 23, 0.98);
    box-shadow: var(--shadow-md);
    padding: 0.25rem 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: clamp(0.5rem, 1vw, 0.75rem) 0;
    transition: var(--transition);
}

.logo {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    font-weight: 700;
    color: var(--primary-color);
    transition: var(--transition);
}

.logo:hover {
    transform: scale(1.05);
}

.logo span {
    color: var(--secondary-color);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: clamp(1rem, 2vw, 2rem);
}

.nav-links a {
    font-weight: 500;
    position: relative;
    color: var(--light-gray);
    font-size: clamp(0.85rem, 1vw, 0.95rem);
    padding: clamp(0.4rem, 1vw, 0.5rem) clamp(0.8rem, 1.5vw, 1rem);
    border-radius: 4px;
    overflow: hidden;
}

.nav-links a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color), var(--primary-light)) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    background-size: 300% 300%;
    animation: borderGradient 4s ease infinite;
    opacity: 0;
    transition: var(--transition);
}

.nav-links a:hover::before {
    opacity: 1;
    transform: scale(1.05);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--primary-light);
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-links a.active {
    color: var(--primary-light);
    font-weight: 600;
}

.nav-links a.active::before {
    opacity: 1;
}

.nav-links a.active::after {
    width: 100%;
}

.hamburger {
    display: none;
    cursor: pointer;
    z-index: 1001;
    padding: 10px;
}

.hamburger .line {
    width: 25px;
    height: 3px;
    background-color: var(--light-gray);
    margin: 4px 0;
    transition: var(--transition);
}

.hamburger.active .line:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.active .line:nth-child(2) {
    opacity: 0;
}

.hamburger.active .line:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}

/* Hero Section */
.hero {
    padding-top: clamp(5rem, 10vw, 6rem);
    background: linear-gradient(135deg, var(--darker-color) 0%, var(--dark-color) 100%);
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
    z-index: 0;
}

.hero .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(2rem, 4vw, 3rem);
    position: relative;
    z-index: 1;
}

.hero-content {
    flex: 1;
}

.hero-content h1 span {
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-content h2 {
    font-weight: 400;
    color: var(--medium-gray);
    margin-bottom: clamp(1.5rem, 3vw, 2rem);
}

.hero-content p {
    max-width: clamp(400px, 60vw, 600px);
    margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
}

.hero-buttons {
    display: flex;
    gap: clamp(0.75rem, 1.5vw, 1rem);
    margin-top: clamp(1.5rem, 3vw, 2rem);
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-image .image-wrapper {
    width: clamp(250px, 30vw, 350px);
    height: clamp(250px, 30vw, 350px);
    border-radius: 50%;
    overflow: hidden;
    border: clamp(3px, 0.5vw, 5px) solid var(--primary-color);
    box-shadow: var(--shadow-xl);
    position: relative;
    transition: var(--transition);
}

.hero-image .image-wrapper:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px rgba(79, 70, 229, 0.3);
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.glow-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.5);
    opacity: 0;
    transition: opacity 0.5s ease;
}

.image-wrapper:hover .glow-effect {
    opacity: 1;
    animation: pulse 2s infinite;
}

/* About Section */
.about {
    background-color: var(--dark-color);
    position: relative;
    overflow: hidden;
}

.about::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: clamp(200px, 30vw, 300px);
    height: clamp(200px, 30vw, 300px);
    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
    z-index: 0;
}

.about .container {
    position: relative;
    z-index: 1;
}

.about-content {
    display: flex;
    align-items: center;
    gap: clamp(2rem, 5vw, 4rem);
}

.about-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.about-image img {
    max-width: clamp(250px, 40vw, 350px);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-xl);
    transition: var(--transition);
}

.about-image img:hover {
    transform: translateY(-5px);
}

.about-text {
    flex: 1;
}

.about-text p {
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.about-details {
    display: flex;
    gap: clamp(1rem, 2vw, 1.5rem);
    margin-top: clamp(1.5rem, 3vw, 2.5rem);
}

.detail-item {
    display: flex;
    align-items: flex-start;
    gap: clamp(0.75rem, 1.5vw, 1rem);
    padding: clamp(1rem, 2vw, 1.5rem);
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    flex: 1;
    border: 1px solid var(--card-border);
    backdrop-filter: blur(5px);
}

.detail-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-color);
}

.detail-item i {
    font-size: clamp(1.5rem, 2.5vw, 1.75rem);
    color: var(--primary-color);
    margin-top: 0.25rem;
    transition: var(--transition);
}

.detail-item:hover i {
    transform: scale(1.2);
}

.detail-item h3 {
    margin-bottom: clamp(0.25rem, 0.5vw, 0.5rem);
}

.detail-item p {
    margin-bottom: 0;
    font-size: clamp(0.85rem, 1vw, 0.95rem);
}

/* Services Section */
.services {
    background-color: var(--darker-color);
    position: relative;
    overflow: hidden;
}

.services::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: clamp(200px, 30vw, 300px);
    height: clamp(200px, 30vw, 300px);
    background: radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%);
    z-index: 0;
}

.services .container {
    position: relative;
    z-index: 1;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(280px, 30vw, 300px), 1fr));
    gap: clamp(1.5rem, 3vw, 2rem);
}

.service-card {
    background-color: var(--card-bg);
    padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 2.5vw, 2rem);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    text-align: center;
    border: 1px solid var(--card-border);
    backdrop-filter: blur(5px);
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.service-card:hover::before {
    transform: scaleX(1);
}

.service-icon {
    width: clamp(60px, 8vw, 80px);
    height: clamp(60px, 8vw, 80px);
    margin: 0 auto clamp(1rem, 2vw, 1.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
    color: var(--white);
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    border-radius: 50%;
    transition: var(--transition);
}

.service-card:hover .service-icon {
    transform: rotateY(180deg);
    background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
}

.service-card h3 {
    margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
    position: relative;
    display: inline-block;
}

.service-card h3::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transition: var(--transition);
}

.service-card:hover h3::after {
    width: 100%;
}

.service-card p {
    margin-bottom: 0;
    font-size: clamp(0.9rem, 1.1vw, 1rem);
}

.service-wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shine 2s infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.service-card:hover .service-wave {
    opacity: 1;
}

/* Skills Section */
.skills {
    background-color: var(--dark-color);
    position: relative;
    overflow: hidden;
}

.skills::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 10%;
    width: clamp(150px, 25vw, 200px);
    height: clamp(150px, 25vw, 200px);
    background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%);
    z-index: 0;
}

.skills .container {
    position: relative;
    z-index: 1;
}

.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(280px, 30vw, 300px), 1fr));
    gap: clamp(1.5rem, 3vw, 2rem);
}

.skill-category {
    background-color: var(--card-bg);
    padding: clamp(1.5rem, 3vw, 2rem);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    border: 1px solid var(--card-border);
    backdrop-filter: blur(5px);
}

.skill-category:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-color);
}

.skill-header {
    display: flex;
    align-items: center;
    gap: clamp(0.75rem, 1.5vw, 1rem);
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.skill-header i {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    color: var(--primary-color);
    transition: var(--transition);
}

.skill-category:hover .skill-header i {
    transform: rotate(15deg);
}

.skill-header h3 {
    margin-bottom: 0;
}

.skill-list {
    display: flex;
    flex-direction: column;
    gap: clamp(0.75rem, 1.5vw, 1.25rem);
}

.skill-list li {
    display: flex;
    flex-direction: column;
    gap: clamp(0.25rem, 0.5vw, 0.5rem);
}

.skill-name {
    font-weight: 500;
    font-size: clamp(0.85rem, 1vw, 0.95rem);
    color: var(--light-gray);
}

.skill-bar {
    width: 100%;
    height: clamp(6px, 1vw, 8px);
    background-color: var(--dark-gray);
    border-radius: 4px;
    overflow: hidden;
}

.skill-level {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 4px;
    transition: width 1s ease-in-out;
    position: relative;
}

.skill-level::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shine 2s infinite;
}

/* Projects Section */
.projects {
    background-color: var(--darker-color);
    position: relative;
    overflow: hidden;
}

.projects::before {
    content: '';
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: clamp(150px, 25vw, 200px);
    height: clamp(150px, 25vw, 200px);
    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
    z-index: 0;
}

.projects .container {
    position: relative;
    z-index: 1;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(clamp(300px, 35vw, 350px), 1fr));
    gap: clamp(1.5rem, 3vw, 2rem);
}

.project-card {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    border: 1px solid var(--card-border);
    backdrop-filter: blur(5px);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-color);
}

.project-header {
    padding: clamp(1rem, 2vw, 1.5rem);
    border-bottom: 1px solid var(--dark-gray);
}

.project-header h3 {
    margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(0.25rem, 0.5vw, 0.5rem);
}

.project-tech span {
    background-color: var(--dark-gray);
    color: var(--primary-light);
    font-size: clamp(0.65rem, 0.8vw, 0.75rem);
    font-weight: 500;
    padding: clamp(0.15rem, 0.3vw, 0.25rem) clamp(0.5rem, 1vw, 0.75rem);
    border-radius: 50px;
    border: 1px solid var(--dark-gray);
    transition: var(--transition);
}

.project-card:hover .project-tech span {
    transform: translateY(-3px);
    background-color: var(--primary-color);
    color: var(--white);
}

.project-description {
    padding: 0 clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem);
}

.project-description p {
    font-size: clamp(0.85rem, 1vw, 0.95rem);
    margin-bottom: 0;
}

/* Enhanced Project Gallery */
.project-gallery {
    position: relative;
    margin-top: auto;
    overflow: hidden;
}

.gallery-container {
    position: relative;
    width: 100%;
    height: clamp(180px, 25vw, 250px);
    overflow: hidden;
}

.gallery-slide {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
}

.gallery-image {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
    transition: var(--transition);
}

.gallery-image:hover {
    opacity: 0.9;
}

.gallery-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 clamp(0.75rem, 1.5vw, 1rem);
    pointer-events: none;
}

.gallery-btn {
    width: clamp(35px, 4vw, 40px);
    height: clamp(35px, 4vw, 40px);
    background-color: rgba(15, 23, 42, 0.8);
    border: none;
    border-radius: 50%;
    color: var(--white);
    font-size: clamp(0.9rem, 1vw, 1rem);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    opacity: 0;
    transition: var(--transition);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--card-border);
    z-index: 10;
}

.project-card:hover .gallery-btn,
.gallery-btn:focus {
    opacity: 1;
}

.gallery-btn:hover {
    background-color: var(--primary-color);
    color: var(--white);
    transform: scale(1.1);
}

.gallery-dots {
    position: absolute;
    bottom: clamp(0.75rem, 1.5vw, 1rem);
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: clamp(0.25rem, 0.5vw, 0.5rem);
    z-index: 10;
}

.gallery-dot {
    width: clamp(8px, 1vw, 10px);
    height: clamp(8px, 1vw, 10px);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: var(--transition);
}

.gallery-dot.active {
    background-color: var(--primary-color);
    transform: scale(1.2);
}

/* Lightbox Styles */
.lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 2000;
    overflow: auto;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.lightbox.show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 1;
}

.lightbox-content {
    max-width: 90%;
    max-height: 80vh;
    object-fit: contain;
    margin: auto;
    display: block;
    animation: zoomIn 0.3s ease;
    border-radius: var(--border-radius);
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.5);
    transition: transform 0.3s ease;
}

.lightbox-content:hover {
    transform: scale(1.02);
}

.lightbox-caption {
    color: var(--white);
    text-align: center;
    padding: 1rem;
    max-width: 80%;
    margin: 0 auto;
}

.lightbox-nav {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 clamp(1rem, 3vw, 2rem);
    transform: translateY(-50%);
    pointer-events: none;
}

.lightbox-nav-btn {
    width: clamp(40px, 5vw, 50px);
    height: clamp(40px, 5vw, 50px);
    background-color: rgba(79, 70, 229, 0.5);
    border: none;
    border-radius: 50%;
    color: var(--white);
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    transition: var(--transition);
}

.lightbox-nav-btn:hover {
    background-color: rgba(79, 70, 229, 0.8);
    transform: scale(1.1);
}

.close-btn {
    position: absolute;
    top: clamp(1rem, 2vw, 2rem);
    right: clamp(1rem, 2vw, 2rem);
    color: var(--white);
    font-size: clamp(2rem, 3vw, 2.5rem);
    font-weight: bold;
    cursor: pointer;
    transition: var(--transition);
}

.close-btn:hover {
    color: var(--primary-light);
    transform: rotate(90deg);
}

/* Contact Section */
.contact {
    background-color: var(--dark-color);
    position: relative;
    overflow: hidden;
}

.contact::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 10%;
    width: clamp(150px, 25vw, 200px);
    height: clamp(150px, 25vw, 200px);
    background: radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%);
    z-index: 0;
}

.contact .container {
    position: relative;
    z-index: 1;
}

.contact-content {
    display: flex;
    gap: clamp(2rem, 5vw, 4rem);
}

.contact-info {
    flex: 1;
}

.contact-info h3 {
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.contact-info p {
    margin-bottom: clamp(1.5rem, 3vw, 2rem);
    max-width: clamp(300px, 50vw, 400px);
}

.contact-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 25vw, 250px), 1fr));
    gap: clamp(1rem, 2vw, 1.5rem);
    margin: clamp(1.5rem, 3vw, 2.5rem) 0;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: clamp(0.75rem, 1.5vw, 1rem);
    padding: clamp(1rem, 2vw, 1.5rem);
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    border: 1px solid var(--card-border);
    backdrop-filter: blur(5px);
}

.contact-item:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-color);
}

.contact-item i {
    font-size: clamp(1.1rem, 1.5vw, 1.25rem);
    color: var(--primary-color);
    margin-top: 0.25rem;
    transition: var(--transition);
}

.contact-item:hover i {
    transform: scale(1.2);
}

.contact-item h4 {
    margin-bottom: clamp(0.15rem, 0.3vw, 0.25rem);
}

.contact-item a {
    color: var(--medium-gray);
    font-size: clamp(0.8rem, 1vw, 0.9rem);
}

.contact-item a:hover {
    color: var(--primary-light);
}

.social-links {
    display: flex;
    gap: clamp(0.75rem, 1.5vw, 1rem);
    margin-top: clamp(1.5rem, 3vw, 2rem);
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(35px, 4vw, 40px);
    height: clamp(35px, 4vw, 40px);
    border-radius: 50%;
    background-color: var(--card-bg);
    color: var(--primary-color);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    font-size: clamp(0.9rem, 1vw, 1rem);
    border: 1px solid var(--card-border);
}

.social-icon:hover {
    background-color: var(--primary-color);
    color: var(--white);
    transform: translateY(-3px) rotate(10deg);
    box-shadow: var(--shadow-md);
}

.contact-form {
    flex: 1;
    background-color: var(--card-bg);
    padding: clamp(1.5rem, 3vw, 2rem);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--card-border);
    backdrop-filter: blur(5px);
    transition: var(--transition);
}

.contact-form:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
}

.form-group {
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
    position: relative;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: clamp(0.6rem, 1.5vw, 0.75rem) clamp(0.8rem, 1.5vw, 1rem);
    border: 1px solid var(--dark-gray);
    border-radius: var(--border-radius);
    font-family: inherit;
    font-size: clamp(0.9rem, 1.1vw, 1rem);
    transition: var(--transition);
    background-color: var(--dark-color);
    color: var(--light-gray);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

.form-group textarea {
    min-height: clamp(120px, 20vw, 150px);
    resize: vertical;
}

.form-group label {
    position: absolute;
    left: clamp(0.8rem, 1.5vw, 1rem);
    top: clamp(0.6rem, 1.5vw, 0.75rem);
    color: var(--medium-gray);
    transition: all 0.3s ease;
    pointer-events: none;
}

.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group textarea:focus + label,
.form-group textarea:not(:placeholder-shown) + label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.75rem;
    background-color: var(--dark-color);
    padding: 0 0.2rem;
    color: var(--primary-color);
}

/* Footer Styles */
footer {
    background-color: var(--darker-color);
    color: var(--light-gray);
    padding: clamp(3rem, 6vw, 4rem) 0 0;
    position: relative;
    overflow: hidden;
}

footer::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: clamp(200px, 30vw, 300px);
    height: clamp(200px, 30vw, 300px);
    background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%);
    z-index: 0;
}

footer .container {
    position: relative;
    z-index: 1;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 25vw, 250px), 1fr));
    gap: clamp(2rem, 4vw, 3rem);
    margin-bottom: clamp(2rem, 4vw, 3rem);
}

.footer-info .logo {
    color: var(--white);
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.footer-info p {
    color: var(--light-gray);
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.footer-links h4,
.footer-contact h4 {
    color: var(--white);
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
    font-size: clamp(1.1rem, 2vw, 1.25rem);
}

.footer-links ul,
.footer-contact ul {
    display: flex;
    flex-direction: column;
    gap: clamp(0.5rem, 1vw, 0.75rem);
}

.footer-links a,
.footer-contact li {
    color: var(--light-gray);
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: clamp(0.25rem, 0.5vw, 0.5rem);
}

.footer-links a:hover {
    color: var(--primary-light);
    transform: translateX(5px);
}

.footer-contact i {
    width: 20px;
    text-align: center;
}

.footer-bottom {
    border-top: 1px solid var(--dark-gray);
    padding: clamp(1rem, 2vw, 1.5rem) 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.back-to-top {
    width: clamp(35px, 4vw, 40px);
    height: clamp(35px, 4vw, 40px);
    background-color: var(--primary-color);
    color: var(--white);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
}

.back-to-top:hover {
    background-color: var(--primary-light);
    transform: translateY(-3px) rotate(360deg);
}

/* Responsive Styles */
@media (max-width: 992px) {
    .hero .container,
    .about-content,
    .contact-content {
        flex-direction: column;
    }

    .hero-content,
    .about-text,
    .contact-info {
        text-align: center;
    }

    .hero-buttons {
        justify-content: center;
    }

    .about-details {
        justify-content: center;
    }

    .hero-image {
        margin-top: clamp(2rem, 4vw, 3rem);
    }

    .contact-info p {
        max-width: 100%;
    }

    .social-links {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 100vh;
        background-color: var(--dark-color);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        transition: var(--transition);
        box-shadow: var(--shadow-xl);
        padding: 2rem;
    }

    .nav-links.active {
        right: 0;
    }

    .hamburger {
        display: flex;
        flex-direction: column;
    }

    .hamburger.active .line:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .hamburger.active .line:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .line:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .detail-item {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    .project-card {
        max-width: 100%;
    }

    .gallery-btn {
        opacity: 1 !important;
        width: 35px;
        height: 35px;
        font-size: 0.9rem;
    }
}

@media (max-width: 576px) {
    .hero-buttons {
        flex-direction: column;
    }

    .about-details {
        flex-direction: column;
    }

    .footer-content {
        grid-template-columns: 1fr;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 1rem;
    }

    .gallery-dot {
        width: 8px;
        height: 8px;
    }
}

/* Animation on scroll */
.project-card,
.detail-item,
.skill-category,
.contact-item,
.service-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.project-card.visible,
.detail-item.visible,
.skill-category.visible,
.contact-item.visible,
.service-card.visible {
    opacity: 1;
    transform: translateY(0);
}
