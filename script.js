// Countdown Timer Functionality
function updateCountdown() {
    // Set the engagement date (December 14th, 2024 at 6:00 PM)
    const engagementDate = new Date('September 5, 2025 18:00:00').getTime();
    const now = new Date().getTime();
    const distance = engagementDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // If the countdown is over, show a message
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        // You can add a message here if needed
        // document.querySelector('.countdown h2').textContent = "Today is the day!";
    }
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
    // Scroll arrow click handler
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            const countdownSection = document.getElementById('countdown');
            countdownSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Add smooth scrolling to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Fade-in Animation for Sections
function initFadeInAnimations() {
    const sections = document.querySelectorAll('section:not(#hero)');
    
    // Add fade-in class to all sections initially
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// RSVP Button Functionality
function initRSVPButton() {
    const rsvpButton = document.querySelector('.rsvp-button');
    if (rsvpButton) {
        rsvpButton.addEventListener('click', () => {
            // You can replace this with actual form handling or redirect
            alert('RSVP functionality will be implemented here. You can embed a Google Form or create a custom form.');
            
            // Example: Redirect to a Google Form
            // window.open('YOUR_GOOGLE_FORM_URL', '_blank');
        });
    }
}

// Add some interactive effects
function initInteractiveEffects() {
    // Add hover effects to event cards
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effect to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            // Add a ripple effect
            icon.style.transform = 'scale(0.9)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Immediately force scroll to top and disable smooth scrolling temporarily
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    
    // Start the countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Initialize all functionality
    initSmoothScrolling();
    initFadeInAnimations();
    initRSVPButton();
    initInteractiveEffects();
    initParallaxEffect();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        // Re-enable smooth scrolling after page is loaded
        document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);
});

// Ensure page starts at top when window loads
window.addEventListener('load', function() {
    // Force scroll to top again and ensure it stays there
    window.scrollTo(0, 0);
    
    // Add a subtle floating animation to the hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out, float 6s ease-in-out infinite';
    }
    
    // Final check to ensure we're at the top
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// Optimize game iframe loading
function optimizeGameLoading() {
    const gameIframe = document.querySelector('#game iframe');
    if (gameIframe) {
        // Lazy load the game iframe
        gameIframe.setAttribute('loading', 'lazy');
        // Only load when it comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Game is now visible, ensure it's loaded
                    if (gameIframe.src) {
                        gameIframe.style.opacity = '1';
                    }
                }
            });
        });
        observer.observe(gameIframe);
    }
}

// Call game optimization when DOM is ready
document.addEventListener('DOMContentLoaded', optimizeGameLoading);

// Add floating animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    // Recalculate any layout-dependent elements if needed
    const countdownItems = document.querySelectorAll('.countdown-item');
    countdownItems.forEach(item => {
        // Ensure proper spacing on resize
        item.style.transition = 'all 0.3s ease';
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const currentSection = getCurrentSection();
        const nextSection = getNextSection(currentSection);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const currentSection = getCurrentSection();
        const prevSection = getPreviousSection(currentSection);
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Helper functions for keyboard navigation
function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;
    
    for (let section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            return section;
        }
    }
    return sections[0];
}

function getNextSection(currentSection) {
    const sections = Array.from(document.querySelectorAll('section'));
    const currentIndex = sections.indexOf(currentSection);
    return sections[currentIndex + 1] || null;
}

function getPreviousSection(currentSection) {
    const sections = Array.from(document.querySelectorAll('section'));
    const currentIndex = sections.indexOf(currentSection);
    return sections[currentIndex - 1] || null;
} 