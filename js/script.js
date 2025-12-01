// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ==================== LOADER ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1000);
});

// ==================== PARTICLES ====================
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particles.appendChild(particle);
    }
}
createParticles();

// ==================== HEADER SCROLL ====================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==================== MOBILE MENU ====================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// ==================== SMOOTH SCROLL ====================
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

// ==================== REVEAL ANIMATIONS ====================
function reveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();

// ==================== COUNTER ANIMATION ====================
let counterAnimated = false;

function animateCounters() {
    if (counterAnimated) return;
    
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                counter.classList.add('counting');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
                counter.classList.remove('counting');
            }
        };
        
        updateCounter();
    });
    
    counterAnimated = true;
}

// Trigger counter animation when stats section is visible
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            animateCounters();
        }
    }
});

// ==================== SCROLL TO TOP ====================
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== BOOKING MODAL ====================
const modal = document.getElementById('bookingModal');
const bookingBtnOnline = document.getElementById('bookingBtnOnline');
const bookingBtnOffline = document.getElementById('bookingBtnOffline');
const bookingBtn2 = document.getElementById('bookingBtn2');
const modalClose = document.getElementById('modalClose');
const bookingForm = document.getElementById('bookingForm');
const appointmentTypeSelection = document.getElementById('appointmentTypeSelection');
const modalTitle = document.getElementById('modalTitle');

let appointmentType = 'online'; // default
let showTypeSelection = false; // Flag to show/hide type selection

function openModal(type, needsSelection = false) {
    appointmentType = type;
    showTypeSelection = needsSelection;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (needsSelection) {
        // Show type selection, hide form
        appointmentTypeSelection.style.display = 'block';
        bookingForm.style.display = 'none';
        modalTitle.textContent = 'Записаться на прием';
    } else {
        // Hide type selection, show form
        appointmentTypeSelection.style.display = 'none';
        bookingForm.style.display = 'block';
        
        // Update modal title based on type
        if (type === 'online') {
            modalTitle.textContent = 'Записаться на онлайн прием';
        } else {
            modalTitle.textContent = 'Записаться на очный прием';
        }
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    bookingForm.reset();
}

// Direct appointment buttons (Hero section)
if (bookingBtnOnline) {
    bookingBtnOnline.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('online', false);
    });
}

if (bookingBtnOffline) {
    bookingBtnOffline.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('offline', false);
    });
}

// "Записаться сейчас" button - shows type selection
if (bookingBtn2) {
    bookingBtn2.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('online', true);
    });
}

// Handle appointment type selection buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('appointment-type-btn')) {
        const selectedType = e.target.getAttribute('data-type');
        appointmentType = selectedType;
        
        // Hide selection, show form
        appointmentTypeSelection.style.display = 'none';
        bookingForm.style.display = 'block';
        
        // Update title
        if (selectedType === 'online') {
            modalTitle.textContent = 'Записаться на онлайн прием';
        } else {
            modalTitle.textContent = 'Записаться на очный прием';
        }
    }
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Form submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(bookingForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email') || 'Не указан';
    const message = formData.get('message') || 'Не указано';
    
    // Choose WhatsApp number based on appointment type
    const whatsappNumber = appointmentType === 'online' ? '77055580008' : '77077339686';
    const appointmentTypeText = appointmentType === 'online' ? 'Онлайн прием' : 'Оффлайн прием';
    
    // Create WhatsApp message
    const whatsappMessage = `Здравствуйте! Хочу записаться на прием.%0A%0A` +
        `Тип приема: ${appointmentTypeText}%0A` +
        `Имя: ${name}%0A` +
        `Телефон: ${phone}%0A` +
        `Email: ${email}%0A` +
        `Сообщение: ${message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Reset form and close modal
    bookingForm.reset();
    closeModal();
});

// ==================== CURSOR TRAIL (Optional) ====================
if (window.innerWidth > 768) {
    let cursorTrails = [];
    const maxTrails = 10;

    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.style.opacity = '0.5';
        }, 10);

        setTimeout(() => {
            trail.remove();
        }, 500);

        cursorTrails.push(trail);

        if (cursorTrails.length > maxTrails) {
            const oldTrail = cursorTrails.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.remove();
            }
        }
    });
}

// ==================== REVIEWS SLIDER ====================
const reviewsSlider = document.getElementById('reviewsSlider');
const reviewItems = document.querySelectorAll('.review-item');

// Pause animation on hover
if (reviewsSlider) {
    reviewsSlider.addEventListener('mouseenter', () => {
        reviewsSlider.classList.add('paused');
    });

    reviewsSlider.addEventListener('mouseleave', () => {
        reviewsSlider.classList.remove('paused');
    });

    // Create modal for viewing reviews
    const reviewModal = document.createElement('div');
    reviewModal.className = 'review-modal';
    reviewModal.id = 'reviewModal';
    reviewModal.innerHTML = `
        <div class="review-modal-content">
            <span class="review-modal-close" id="reviewModalClose">&times;</span>
            <img src="" alt="Отзыв" id="reviewModalImg">
        </div>
    `;
    document.body.appendChild(reviewModal);

    const reviewModalClose = document.getElementById('reviewModalClose');
    const reviewModalImg = document.getElementById('reviewModalImg');

    // Open modal on click
    reviewItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            reviewModalImg.src = imgSrc;
            reviewModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    function closeReviewModal() {
        reviewModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    reviewModalClose.addEventListener('click', closeReviewModal);

    reviewModal.addEventListener('click', (e) => {
        if (e.target === reviewModal) {
            closeReviewModal();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && reviewModal.classList.contains('active')) {
            closeReviewModal();
        }
    });
}

// ==================== PRICING CARDS IMAGE MODAL ====================
const pricingCards = document.querySelectorAll('.pricing-card[data-image], .clickable-program[data-image]');

if (pricingCards.length > 0) {
    pricingCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent opening modal if clicking on links or buttons
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
            
            const imageSrc = card.getAttribute('data-image');
            if (imageSrc) {
                const reviewModalImg = document.getElementById('reviewModalImg');
                const reviewModal = document.getElementById('reviewModal');
                
                if (reviewModalImg && reviewModal) {
                    reviewModalImg.src = imageSrc;
                    reviewModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    });
}

// ==================== DYNAMIC GREETING ====================
const hour = new Date().getHours();
let greeting = '';

if (hour < 12) greeting = 'Доброе утро';
else if (hour < 18) greeting = 'Добрый день';
else greeting = 'Добрый вечер';

console.log(`${greeting}! Добро пожаловать на страницу Dr. Kristina Alekseevna`);
