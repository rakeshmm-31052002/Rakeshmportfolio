// Main JavaScript file for the portfolio
console.log(`${APP_NAME} v${VERSION} loaded successfully!`);

// Global variables
let typingTextIndex = 0;
let charIndex = 0;
let isDeleting = false;
let codeCharIndex = 0;

// DOM Elements
let typingTextElement;
let codeTypingElement;
let hamburger;
let navMenu;
let loader;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Initialize DOM elements
    typingTextElement = document.getElementById('typing-text');
    codeTypingElement = document.getElementById('code-typing');
    hamburger = document.getElementById('hamburger');
    navMenu = document.getElementById('nav-menu');
    loader = document.getElementById('loader');
    
    // Generate dynamic content
    generateProjects();
    generateExperience();
    generateSkills();
    generateContact();
    
    // Initialize animations and functionality
    initLoader();
    initTypingAnimation();
    initCodeTypingAnimation();
    initMobileMenu();
    initSmoothScrolling();
    initNavbarScroll();
    initScrollAnimations();
});

// Loader functionality
function initLoader() {
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
}

// Typing animation for hero section
function initTypingAnimation() {
    if (!typingTextElement) return;
    
    function typeText() {
        const currentText = TYPING_TEXTS[typingTextIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? ERASING_SPEED : TYPING_SPEED;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = DELAY_BETWEEN_TEXTS;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typingTextIndex = (typingTextIndex + 1) % TYPING_TEXTS.length;
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    typeText();
}

// Code typing animation
function initCodeTypingAnimation() {
    if (!codeTypingElement) return;
    
    function typeCode() {
        if (codeCharIndex < CODE_TEXT.length) {
            codeTypingElement.textContent += CODE_TEXT.charAt(codeCharIndex);
            codeCharIndex++;
            setTimeout(typeCode, CODE_TYPING_SPEED);
        }
    }
    
    // Start code typing after a delay
    setTimeout(typeCode, 1000);
}

// Mobile menu functionality
function initMobileMenu() {
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 15, 63, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(26, 15, 63, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Add active class to current section in navbar
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Dynamic content generation functions

// Generate Projects Section
function generateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    PROJECTS.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * ANIMATION_SETTINGS.staggerDelay}ms`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="${project.image} project-icon"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                    ${project.githubLink !== '#' ? `
                        <a href="${project.githubLink}" class="project-link" target="_blank">
                            <i class="fab fa-github"></i>
                            Source Code
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Generate Experience Section
function generateExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    EXPERIENCE.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * ANIMATION_SETTINGS.staggerDelay}ms`;
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <span class="timeline-date">${exp.duration}</span>
                <p>${exp.description}</p>
                <div class="timeline-skills">
                    ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Generate Skills Section
function generateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    Object.keys(SKILLS).forEach((category, categoryIndex) => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        skillCategory.style.animationDelay = `${categoryIndex * ANIMATION_SETTINGS.staggerDelay}ms`;
        
        const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
        
        skillCategory.innerHTML = `
            <h3>${categoryTitle}</h3>
            <div class="skill-items">
                ${SKILLS[category].map(skill => `
                    <div class="skill-item" data-level="${skill.level}">
                        <i class="${skill.icon}"></i>
                        <span>${skill.name}</span>
                        <div class="skill-progress">
                            <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(skillCategory);
    });
}

// Generate Contact Section
function generateContact() {
    const contactInfo = document.querySelector('.contact-info');
    if (!contactInfo) return;
    
    contactInfo.innerHTML = '';
    
    Object.keys(CONTACT_INFO).forEach((key, index) => {
        const contact = CONTACT_INFO[key];
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';
        contactItem.style.animationDelay = `${index * ANIMATION_SETTINGS.staggerDelay}ms`;
        
        contactItem.innerHTML = `
            <i class="${contact.icon}"></i>
            <div>
                <h3>${key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                ${contact.link !== '#' ? 
                    `<a href="${contact.link}" target="_blank">${contact.value}</a>` : 
                    `<p>${contact.value}</p>`
                }
            </div>
        `;
        
        contactInfo.appendChild(contactItem);
    });
}

// Enhanced scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: ANIMATION_SETTINGS.observerThreshold,
        rootMargin: ANIMATION_SETTINGS.observerRootMargin
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add stagger effect for child elements
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * ANIMATION_SETTINGS.staggerDelay);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToObserve = document.querySelectorAll('section, .project-card, .skill-category, .contact-item, .timeline-item');
    elementsToObserve.forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });
}

// Enhanced navbar highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Enhanced smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS classes for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-element {
            opacity: 0;
            transform: translateY(${ANIMATION_SETTINGS.slideUpDistance}px);
            transition: opacity ${ANIMATION_SETTINGS.fadeInDuration}ms ease, 
                       transform ${ANIMATION_SETTINGS.fadeInDuration}ms ease;
        }
        
        .animate-element.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .skill-progress {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            margin-top: 8px;
            overflow: hidden;
        }
        
        .skill-progress-bar {
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 2px;
            transition: width 1s ease-in-out;
            width: 0%;
        }
        
        .animate-in .skill-progress-bar {
            width: var(--progress-width) !important;
        }
        
        .project-card:hover {
            transform: translateY(-8px) scale(1.02);
        }
        
        .skill-item:hover {
            transform: translateY(-5px);
            background: rgba(102, 126, 234, 0.15);
        }
        
        .nav-link.active {
            color: #667eea;
        }
        
        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
});
