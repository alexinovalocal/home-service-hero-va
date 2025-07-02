
// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.fade-in, .scale-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        if (element.classList.contains('fade-in')) {
            element.style.transform = 'translateY(20px)';
        } else if (element.classList.contains('scale-in')) {
            element.style.transform = 'scale(0.95)';
        }
        
        observer.observe(element);
    });

    // Button click handlers
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // Handle different button actions
            const buttonText = this.textContent.trim();
            
            if (buttonText.includes('Free Trial') || buttonText.includes('Free Consultation')) {
                // Replace with your actual contact form or booking system
                alert('Thank you for your interest! Please contact us at info@inovalocal.com to schedule your free consultation.');
            } else if (buttonText.includes('Demo Call')) {
                // Replace with your actual demo booking system
                alert('Thank you for your interest in a demo! Please contact us at info@inovalocal.com to schedule your demo call.');
            }
        });
    });

    // Smooth scrolling for internal links (if any are added)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add hover effects to problem cards
    const problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add rotation effect to comparison card
    const comparisonWrapper = document.querySelector('.comparison-wrapper');
    if (comparisonWrapper) {
        comparisonWrapper.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(0deg)';
        });
        
        comparisonWrapper.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(3deg)';
        });
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Initial body styling for smooth load
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';
