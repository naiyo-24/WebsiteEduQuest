// Handle navigation - only prevent default for actual anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only handle anchor links, let other links work normally
        if (href && href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add this before the opportunities code
const defaultImage = 'data:image/svg+xml,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="#f0f0f0"/>
        <text x="50document.addEventListener('DOMContentLoaded', function() {
    // Initialize only interactive UI elements
});="24" fill="#666" text-anchor="middle" dy=".3em">No Image</text>
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
            <a href="/web/" class="download-btn mt-3">
                Apply Now
            </a>
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
        image: 'debasish_b.jpeg',
        quote: `As the CEO and Founder of EduQuest 247, I envision a future where education transcends traditional boundaries. We're pioneering a revolutionary approach to learning and career development through cutting-edge technology and innovation. Our platform is not just a tool; it's a gateway to unlimited possibilities, connecting talented individuals with life-changing opportunities across the globe. What sets us apart is our commitment to democratizing education. We understand that every student has unique potential, and our platform adapts to individual learning styles, making quality education accessible to all. By fostering strong partnerships with leading industries and educational institutions, we're building a robust ecosystem where academic excellence meets real-world opportunities. Our vision extends beyond just providing resources; we're creating a community where students can discover their passions, develop their skills, and connect with mentors who can guide them toward success. Whether it's through internships, job placements, or higher education opportunities, we're dedicated to being the catalyst that transforms aspirations into achievements. Join us in this transformative journey as we reshape the landscape of education and career development. Together, we're not just preparing students for the future; we're empowering them to create it."`,
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
    
    // Return early if required elements are not found
    if (!carousel || !cards.length || !prevBtn || !nextBtn) {
        console.log('Review carousel elements not found');
        return;
    }

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
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
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
                }, index * 150);
            }
        });
    }, { threshold: 0.2 });

    featureItems.forEach(item => observer.observe(item));
    
    // Trigger initial animation if items are already in view
    featureItems.forEach((item, index) => {
        if (item.getBoundingClientRect().top < window.innerHeight) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 150);
        }
    });

    // Smooth scroll only for navigation links
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Floating app button visibility
    const floatingBtn = document.querySelector('.floating-app-btn');
    if (floatingBtn) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (floatingBtn) {
                if (currentScroll > lastScroll && currentScroll > 500) {
                    floatingBtn.style.transform = 'translateY(100px)';
                } else {
                    floatingBtn.style.transform = 'translateY(0)';
                }
            }
            lastScroll = currentScroll;
        });
    }
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
    // Initialize basic UI elements without interfering with navigation
});

// Event listeners removed to allow proper link navigation

// Initialize navbar handling
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

// Contact Form Handler with Enhanced Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    // Custom form validation styles
    const forms = document.querySelectorAll('.needs-validation');
    
    // Add custom validation classes on input
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            }
        });
    });

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const buttonText = submitButton.querySelector('span');
        const spinner = submitButton.querySelector('.spinner-border');
        const originalText = buttonText.textContent;

        // Validate all fields first
        let isValid = true;
        const requiredFields = {
            'full_name': 'fullName',
            'email': 'emailAddress',
            'phone': 'phoneNumber',
            'subject': 'subject',
            'message': 'message',
            'user_type': 'userType'
        };

        // Reset previous validation states
        inputs.forEach(input => {
            input.classList.remove('is-invalid');
        });

        // Custom validation
        for (const [apiField, elementId] of Object.entries(requiredFields)) {
            const element = document.getElementById(elementId);
            const value = element?.value?.trim();
            
            if (!value) {
                element.classList.add('is-invalid');
                isValid = false;
                continue;
            }

            // Specific field validations
            switch(elementId) {
                case 'emailAddress':
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        element.classList.add('is-invalid');
                        isValid = false;
                    }
                    break;
                case 'phoneNumber':
                    if (!/^\d{10}$/.test(value)) {
                        element.classList.add('is-invalid');
                        isValid = false;
                    }
                    break;
                case 'message':
                    if (value.length < 20) {
                        element.classList.add('is-invalid');
                        isValid = false;
                    }
                    break;
            }
        }

        if (!isValid) {
            // Scroll to the first invalid field
            const firstInvalid = contactForm.querySelector('.is-invalid');
            if (firstInvalid) {
                firstInvalid.focus();
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        const formData = new FormData(contactForm);

        // File validation
        const attachment = document.getElementById('attachment');
        if (attachment?.files[0]) {
            if (attachment.files[0].size > 5 * 1024 * 1024) {
                attachment.classList.add('is-invalid');
                const feedback = attachment.parentElement.querySelector('.invalid-feedback') || 
                               attachment.parentElement.querySelector('.text-muted');
                if (feedback) feedback.textContent = 'File size should not exceed 5MB';
                return;
            }
        }

        try {
            // Show loading state
            submitButton.disabled = true;
            buttonText.textContent = 'Sending...';
            spinner.classList.remove('d-none');

            const response = await fetch('https://eduquest.naiyo24.com/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            const result = await response.json();

            if (response.status === 201) {
                // Success feedback
                Swal.fire({
                    icon: 'success',
                    title: 'Thank You!',
                    text: 'Your message has been sent successfully.',
                    confirmButtonColor: '#0d6efd'
                });
                contactForm.reset();
                inputs.forEach(input => {
                    input.classList.remove('is-valid');
                });
            } else {
                throw new Error(result.message || 'Please check all required fields and try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Error feedback
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message || 'An error occurred while sending your message. Please try again.',
                confirmButtonColor: '#0d6efd'
            });
        } finally {
            // Reset button state
            submitButton.disabled = false;
            buttonText.textContent = originalText;
            spinner.classList.add('d-none');
        }
    });

    // File input validation and preview
    const attachment = document.getElementById('attachment');
    if (attachment) {
        attachment.addEventListener('change', function(e) {
            const file = e.target.files[0];
            const feedback = this.parentElement.querySelector('.text-muted');
            
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    this.value = '';
                    this.classList.add('is-invalid');
                    feedback.textContent = 'File size should not exceed 5MB';
                    feedback.classList.remove('text-muted');
                    feedback.classList.add('text-danger');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    feedback.textContent = `Selected file: ${file.name}`;
                    feedback.classList.remove('text-danger');
                    feedback.classList.add('text-muted');
                }
            }
        });
    }
});

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const buttonSpan = submitButton.querySelector('span') || submitButton;
        const originalText = buttonSpan.textContent;

        // Validate required fields
        const requiredFields = {
            'full_name': 'fullName',
            'email': 'emailAddress',
            'phone': 'phoneNumber',
            'subject': 'subject',
            'message': 'message',
            'user_type': 'userType'
        };

        const formData = new FormData();

        // Check and append required fields
        for (const [apiField, elementId] of Object.entries(requiredFields)) {
            const value = document.getElementById(elementId)?.value?.trim();
            if (!value) {
                alert(`Please fill in the ${apiField.replace('_', ' ')}`);
                return;
            }
            formData.append(apiField, value);
        }

        // Phone validation
        const phone = document.getElementById('phoneNumber').value.trim();
        if (!/^\d{10}$/.test(phone)) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        // Email validation
        const email = document.getElementById('emailAddress').value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Optional fields
        const course = document.getElementById('course').value.trim();
        if (course) {
            formData.append('course_or_class', course);
        }

        const preferredTime = document.getElementById('preferredTime').value;
        if (preferredTime) {
            formData.append('preferred_contact_time', preferredTime);
        }

        // File attachment
        const attachment = document.getElementById('attachment');
        if (attachment?.files[0]) {
            if (attachment.files[0].size > 5 * 1024 * 1024) {
                alert('File size should not exceed 5MB');
                return;
            }
            formData.append('attachment', attachment.files[0]);
        }

        try {
            submitButton.disabled = true;
            buttonSpan.textContent = 'Sending...';

            const response = await fetch('https://eduquest.naiyo24.com/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            const result = await response.json();

            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you!',
                    text: 'Your message has been sent successfully.',
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        popup: 'animated fadeInDown'
                    }
                });
                contactForm.reset();
                // Remove valid classes from inputs
                document.querySelectorAll('.form-control').forEach(input => {
                    input.classList.remove('is-valid');
                });
            } else {
                throw new Error(result.message || 'Please check all required fields and try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message || 'An error occurred while sending your message. Please try again.',
                confirmButtonColor: '#1a73e8',
                customClass: {
                    popup: 'animated fadeInDown'
                }
            });
        } finally {
            submitButton.disabled = false;
            buttonSpan.textContent = originalText;
        }
    });

    // File input validation on change
    const attachment = document.getElementById('attachment');
    if (attachment) {
        attachment.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.size > 5 * 1024 * 1024) {
                alert('File size should not exceed 5MB');
                this.value = '';
            }
        });
    }
});
