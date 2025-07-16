
// Interactive features for the Wordle website
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects to table rows
    const tableRows = document.querySelectorAll('.game-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Animate statistics counter on scroll
    const animateCounters = () => {
        const counters = document.querySelectorAll('.game-table td');
        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        };

        counters.forEach(counter => {
            if (isInView(counter) && !counter.classList.contains('animated')) {
                const text = counter.textContent;
                if (/^\d+$/.test(text)) {
                    const finalNumber = parseInt(text);
                    let currentNumber = 0;
                    const increment = finalNumber / 50;
                    
                    const timer = setInterval(() => {
                        currentNumber += increment;
                        if (currentNumber >= finalNumber) {
                            counter.textContent = finalNumber;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(currentNumber);
                        }
                    }, 30);
                    
                    counter.classList.add('animated');
                }
            }
        });
    };

    // Trigger animation on scroll
    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Initial check

    // Add click tracking for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a subtle animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add floating animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card, .content-card');
    featureCards.forEach((card, index) => {
        // Stagger the animation
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });

    // Add dynamic background gradient animation
    let angle = 135;
    setInterval(() => {
        angle += 0.5;
        if (angle >= 360) angle = 0;
        document.body.style.background = `linear-gradient(${angle}deg, #667eea 0%, #764ba2 100%)`;
    }, 100);

    // Add tooltip functionality for table headers
    const tableHeaders = document.querySelectorAll('.game-table th');
    const tooltips = {
        '🏆 Rank': 'Player ranking based on overall performance',
        '👤 Player': 'Username of the player',
        '🎯 Games Won': 'Total number of games successfully completed',
        '⚡ Avg. Guesses': 'Average number of guesses per game',
        '🔥 Win Streak': 'Current consecutive wins',
        '📈 Score': 'Total points accumulated'
    };

    tableHeaders.forEach(header => {
        const text = header.textContent.trim();
        if (tooltips[text]) {
            header.title = tooltips[text];
            header.style.cursor = 'help';
        }
    });

    // Add click effect to tips
    const tips = document.querySelectorAll('.tip');
    tips.forEach(tip => {
        tip.addEventListener('click', function() {
            this.style.background = 'rgba(255, 255, 255, 1)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
            
            setTimeout(() => {
                this.style.background = 'rgba(255, 255, 255, 0.95)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }, 300);
        });
    });

    // Add loading animation for external links
    const externalLinks = document.querySelectorAll('a[href^="https://wordleunlimitedunblocked.com/"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const originalText = this.textContent;
            this.textContent = '🎮 Loading Game...';
            this.style.opacity = '0.8';
            
            // Reset after a short delay (user will navigate away)
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
            }, 2000);
        });
    });

    console.log('🎯 Wordle Unlimited Hub loaded successfully!');
    console.log('🎮 Ready to challenge your word skills!');
});
