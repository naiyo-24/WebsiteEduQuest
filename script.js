// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add this before the opportunities code
const defaultImage = 'data:image/svg+xml,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="#f0f0f0"/>
        <text x="50%" y="50%" font-size="24" fill="#666" text-anchor="middle" dy=".3em">No Image</text>
    </svg>
`);

// Enhanced opportunities data
const opportunities = {
    internships: [
        { 
            title: 'Web Development Intern',
            company: 'Naiyo24 Pvt. Ltd.',
            location: 'On-Site/Remote',
            type: 'internship',
            tags: ['Unpaid', 'Remote'],
            duration: '3 months'
        },
        { 
            title: 'App Development Intern',
            company: 'Naiyo24 Pvt. Ltd.',
            location: 'On-Site/Remote',
            type: 'internship',
            tags: ['Unpaid', 'Remote'],
            duration: '3 months'
        },
        { 
            title: 'Graphics Designing & Editing Intern',
            company: 'Naiyo24 Pvt. Ltd.',
            location: 'On-Site/Remote',
            type: 'internship',
            tags: ['Unpaid', 'Remote'],
            duration: '3 months'
        },
        { 
            title: 'Digital & Social Media Marketing Intern',
            company: 'Naiyo24 Pvt. Ltd.',
            location: 'On-Site/Remote',
            type: 'internship',
            tags: ['Unpaid', 'Remote'],
            duration: '3 months'
        }
    ],
    jobs: [
        {
            title: 'Front-End Developer',
            company: 'Naiyo24 Pvt. Ltd.',
            location: 'Kolkata',
            type: 'job',
            tags: ['Mobile App Development', '-Full Time', '-Onsite'],
            experience: 'Freshers'
        },
        {
            title: 'Back-End Developer',
            company: 'Naiyo24 Pvt. Ltd.',
            location: 'Kolkata',
            type: 'job',
            tags: ['Mobile App Development', '-Full Time', '-Onsite'],
            experience: 'Freshers'
        },
        {
            title: 'Product Head Marketer',
            company: 'Naiyo24 Pvt. Ltd.',
            location: 'Kolkata',
            type: 'job',
            tags: ['Marketing & Sales', '-Full Time', '-Onsite'],
            experience: 'Freshers'
        },
        {
            title: 'Content Writer and Marketer',
            company: 'Naiyo24 Pvt. Ltd.',
            location: 'Kolkata',
            type: 'job',
            tags: ['Design & Graphics', '-Full Time', '-Onsite'],
            experience: 'Freshers'
        },
        {
            title: 'Sales & Marketing Executive',
            company: 'Naiyo24 Pvt. Ltd.',
            location: 'Kolkata',
            type: 'job',
            tags: ['Marketing & Sales', '-Full Time', '-Onsite'],
            experience: 'Freshers'
        },
        // Add more job opportunities...
    ]
};

// Remove form submission code and refactor opportunities loader
function loadOpportunities(filter = 'all') {
    const container = document.querySelector('.opportunities-grid');
    if (!container) return;

    const allOpportunities = [...opportunities.internships, ...opportunities.jobs];
    
    const filteredOpportunities = filter === 'all' 
        ? allOpportunities
        : allOpportunities.filter(opp => opp.type === filter);

    const opportunitiesHTML = filteredOpportunities.map((opp, index) => `
        <div class="opportunity-card" style="--animation-order: ${index}">
            <span class="opportunity-tag">${opp.type === 'internship' ? 'Internship' : 'Job'}</span>
            <h3 class="text-primary">${opp.title}</h3>
            <p class="text-muted mb-2">${opp.company} - ${opp.location}</p>
            <div class="tags-container">
                ${opp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button class="download-btn mt-3" data-bs-toggle="modal" data-bs-target="#comingSoonModal">
                Apply Now
            </button>
        </div>
    `).join('');

    container.innerHTML = opportunitiesHTML;
}

// Enhanced opportunity tab initialization
function initializeOpportunityTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (!tabBtns.length) return;
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadOpportunities(btn.dataset.tab);
        });
    });

    // Load initial opportunities
    loadOpportunities('all');
}

// Team carousel data with correct image paths
const teamMembers = [
    { 
        name: 'Debasish Baidya', 
        role: 'CEO & Founder', 
        image: 'debasish.png',
        quote: `As the CEO and Founder of EduQuest247, I envision a future where education transcends traditional boundaries. We're pioneering a revolutionary approach to learning and career development through cutting-edge technology and innovation. Our platform is not just a tool; it's a gateway to unlimited possibilities, connecting talented individuals with life-changing opportunities across the globe. What sets us apart is our commitment to democratizing education. We understand that every student has unique potential, and our platform adapts to individual learning styles, making quality education accessible to all. By fostering strong partnerships with leading industries and educational institutions, we're building a robust ecosystem where academic excellence meets real-world opportunities. Our vision extends beyond just providing resources; we're creating a community where students can discover their passions, develop their skills, and connect with mentors who can guide them toward success. Whether it's through internships, job placements, or higher education opportunities, we're dedicated to being the catalyst that transforms aspirations into achievements. Join us in this transformative journey as we reshape the landscape of education and career development. Together, we're not just preparing students for the future; we're empowering them to create it."`,
        social: {
            linkedin: 'https://www.linkedin.com/in/debasish-baidya-a63297347/',
            twitter: 'https://x.com/DebasishNaiyo24',
            instagram: 'https://www.instagram.com/debasishbaidya_/',
            facebook: 'https://www.facebook.com/profile.php?id=61563596760262'
        }
    }
];

function initTeamCarousel() {
    console.log('Initializing team carousel...');
    const teamGrid = document.querySelector('.team-grid');
    
    if (!teamGrid) {
        console.error('Team grid element not found!');
        return;
    }

    // Preserve any existing content
    const existingContent = teamGrid.innerHTML;

    const carouselHtml = teamMembers.map((member, index) => `
        <div class="team-member fade-in" style="animation-delay: ${index * 0.2}s; opacity: 0;">
            <div class="team-member-left">
                <img src="images/${member.image}" alt="${member.name}" 
                     onerror="this.src='${defaultImage}'" loading="lazy">
                <div class="team-member-info">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                    <div class="social-links">
                        <a href="${member.social.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="${member.social.twitter}" class="social-link" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="${member.social.instagram}" class="social-link" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="${member.social.facebook}" class="social-link" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="team-member-quote">
                <p class="quote-text">${member.quote}</p>
            </div>
        </div>
    `).join('');

    // Only update if we have new content
    if (carouselHtml.trim()) {
        teamGrid.innerHTML = carouselHtml;
        
        // Fade in team members
        setTimeout(() => {
            document.querySelectorAll('.team-member').forEach(member => {
                member.style.opacity = '1';
                member.style.transform = 'translateY(0)';
            });
        }, 100);
    }
}

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .team-member');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const frameDuration = 1000/60; // 60fps
    const totalFrames = duration/frameDuration;
    const increment = target/totalFrames;
    
    let currentNumber = 0;
    let currentFrame = 0;

    const animate = () => {
        currentFrame++;
        currentNumber += increment;
        
        // Use Math.min to ensure we don't exceed target
        element.textContent = Math.min(Math.floor(currentNumber), target).toLocaleString();
        
        if (currentFrame < totalFrames) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    animate();
}

function initializeCounters() {
    const counterObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    // Add a flag to ensure animation runs only once
                    if (!counter.classList.contains('counted')) {
                        counter.classList.add('counted');
                        setTimeout(() => {
                            animateCounter(counter);
                        }, 100);
                    }
                    observer.unobserve(counter);
                }
            });
        },
        {
            threshold: 0.5,
            rootMargin: '0px'
        }
    );

    document.querySelectorAll('.stat-number').forEach(counter => {
        counterObserver.observe(counter);
    });
}

function initReviewsCarousel() {
    const carousel = document.querySelector('.review-cards');
    const cards = document.querySelectorAll('.review-card');
    const prevBtn = document.querySelector('.review-nav-btn.prev');
    const nextBtn = document.querySelector('.review-nav-btn.next');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 30; // Including gap
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function showNext() {
        const maxIndex = cards.length - (window.innerWidth >= 992 ? 3 : 1);
        currentIndex = Math.min(currentIndex + 1, maxIndex);
        updateCarousel();
    }

    function showPrev() {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    }

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Update on window resize
    window.addEventListener('resize', updateCarousel);

    // Auto-play
    setInterval(showNext, 5000);
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing components...'); // Debug log
    
    // Create a sequence of initializations with proper timing
    const initSequence = async () => {
        try {
            // First wave: Essential UI elements
            await Promise.resolve(initializeCounters());

            // Second wave: Load opportunities and initialize filters
            await Promise.resolve(loadOpportunities('all'));
            await Promise.resolve(initializeOpportunityTabs());

            // Third wave: Team members and reviews
            await Promise.resolve(initTeamCarousel());
            await Promise.resolve(initReviewsCarousel());

            // Final wave: Animations and additional effects
            await Promise.resolve(initializeAnimations());

            // Setup observers
            document.querySelectorAll('.opportunity-card').forEach(card => {
                observer.observe(card);
            });

        } catch (error) {
            console.error('Initialization error:', error);
        }
    };

    // Start the initialization sequence
    initSequence().catch(console.error);

    // Add hover effect to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Navbar scroll effect
    // const navbar = document.querySelector('.navbar'); // Removed duplicate declaration
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const homeSection = document.querySelector('#home');
        const scrollPosition = window.scrollY;
        const navbar = document.querySelector('.navbar');
        
        // Add/remove scrolled class and color-change class
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Change navbar color after about us section
        const aboutSection = document.querySelector('#aboutus');
        if (aboutSection && scrollPosition >= (aboutSection.offsetTop - 100)) {
            navbar.classList.add('color-change');
        } else {
            navbar.classList.remove('color-change');
        }

        // Update active nav link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        });
    });

    // Add scroll direction detection
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Determine scroll direction and toggle navbar
        if (currentScroll <= 0) {
            navbar.classList.remove('hidden');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('hidden')) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else if (currentScroll < lastScroll && navbar.classList.contains('hidden')) {
            // Scrolling up
            navbar.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });
});

function initializeOpportunityAnimations() {
    const cards = document.querySelectorAll('.opportunity-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Animate features on scroll
    const featureItems = document.querySelectorAll('.feature-list li');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150); // Increased delay between items
            }
        });
    }, { threshold: 0.2 }); // Reduced threshold for earlier trigger

    featureItems.forEach(item => observer.observe(item));
    
    // Trigger initial animation if items are already in view
    featureItems.forEach((item, index) => {
        if (item.getBoundingClientRect().top < window.innerHeight) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 150);
        }
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Floating app button visibility
    const floatingBtn = document.querySelector('.floating-app-btn');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 500) {
            floatingBtn.style.transform = 'translateY(100px)';
        } else {
            floatingBtn.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
});

// Service pages initialization
document.addEventListener('DOMContentLoaded', function() {
    // Animate features on scroll
    const featureItems = document.querySelectorAll('.feature-list li');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    featureItems.forEach(item => observer.observe(item));

    // App showcase scroll effects
    const appShowcase = document.querySelector('.app-showcase');
    if (appShowcase) {
        const appMockup = appShowcase.querySelector('.app-mockup');
        window.addEventListener('scroll', () => {
            const rect = appShowcase.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                const rotation = -15 + (scrollProgress * 15);
                appMockup.style.transform = `perspective(1000px) rotateY(${rotation}deg)`;
            }
        });
    }

    // Floating app button visibility
    const floatingBtn = document.querySelector('.floating-app-btn');
    if (floatingBtn) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 500) {
                floatingBtn.style.transform = 'translateY(100px)';
            } else {
                floatingBtn.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize feature list animations
    const featureItems = document.querySelectorAll('.feature-list li');
    featureItems.forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });

    // Intersection Observer for features
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.2 });

    featureItems.forEach(item => {
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // ...existing initialization code...
    
    // Handle all download buttons and store badges
    const downloadButtons = document.querySelectorAll('.btn-primary, .floating-app-btn, .store-btn, .store-badge');
    const comingSoonModal = new bootstrap.Modal(document.getElementById('comingSoonModal'));
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            comingSoonModal.show();
        });
    });

    // ...existing code...
});

document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    // Handle all download buttons
    const downloadButtons = document.querySelectorAll('.btn-primary, .floating-app-btn, .store-btn');
    const comingSoonModal = new bootstrap.Modal(document.getElementById('comingSoonModal'));
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            comingSoonModal.show();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize modal
    const comingSoonModal = new bootstrap.Modal(document.getElementById('comingSoonModal'));
    
    // Add click handlers for all download buttons
    document.querySelectorAll('.btn-primary, .floating-app-btn, .store-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            comingSoonModal.show();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    // Initialize modal for About Us cards
    const comingSoonModal = new bootstrap.Modal(document.getElementById('comingSoonModal'));
    
    // Add click handlers for About Us cards
    document.querySelectorAll('.about-box').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            comingSoonModal.show();
        });
    });

    // ...existing code...
});

// Remove all previous scroll-related event listeners and replace with this
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    let lastScrollTop = 0;
    let isMobileMenuOpen = false;
    
    // Track mobile menu state
    if (navbarCollapse) {
        navbarCollapse.addEventListener('show.bs.collapse', () => {
            isMobileMenuOpen = true;
            navbar.classList.remove('hidden');
        });

        navbarCollapse.addEventListener('hide.bs.collapse', () => {
            isMobileMenuOpen = false;
        });
    }

    function updateNavbar() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Always show navbar at top of page
        if (currentScrollTop <= 0) {
            navbar.classList.remove('hidden', 'scrolled');
            return;
        }

        // Add scrolled class when not at top
        navbar.classList.add('scrolled');

        // Don't hide navbar if mobile menu is open
        if (isMobileMenuOpen) {
            navbar.classList.remove('hidden');
            return;
        }

        // Handle navbar visibility based on scroll direction
        if (currentScrollTop > lastScrollTop) {
            // Scrolling down - hide navbar
            navbar.classList.add('hidden');
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove('hidden');
        }

        // Update service section color change
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            if (currentScrollTop >= servicesSection.offsetTop - 100) {
                navbar.classList.add('color-change');
            } else {
                navbar.classList.remove('color-change');
            }
        }

        lastScrollTop = currentScrollTop;
    }

    // Throttle scroll events
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateNavbar();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initial navbar state
    updateNavbar();

    // Update on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991) {
            isMobileMenuOpen = false;
        }
        updateNavbar();
    }, { passive: true });

    // Prevent navbar from hiding when interacting with it
    navbar.addEventListener('mouseenter', () => {
        navbar.classList.remove('hidden');
    });
});

// Hero section - simplified
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const heroWrapper = document.querySelector('.hero-wrapper');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hero.classList.add('scroll-visible');
            }
        });
    }, observerOptions);

    observer.observe(heroWrapper);
});

// ...existing code...
