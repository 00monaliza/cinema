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

// ==================== LANGUAGE SWITCHER ====================
const translations = {
    ru: {
        // Navigation
        aboutNav: 'Обо мне',
        servicesNav: 'Услуги',
        contactNav: 'Контакты',
        
        // Hero
        heroTitle: 'Кристина Алексеевна',
        heroSubtitle: 'Эндокринолог и Диетолог для детей и взрослых.<br>Доказательная медицина и персонализированный подход.',
        btnOnline: 'Онлайн прием',
        btnOffline: 'Оффлайн прием',
        
        // About
        aboutTitle: 'Обо мне',
        aboutP1: 'Я помогаю людям разобраться в гормонах, настроить питание, понять свой организм и почувствовать себя лучше. В своей практике придерживаюсь международных рекомендаций.',
        aboutP2: 'В своём блоге я создаю пространство, где каждый человек может получить понятные ответы о гормонах, питании и метаболическом здоровье.',
        aboutQuote: '"Моя цель — помочь людям перейти от мифов и устаревших подходов к современным, безопасным и доказательным решениям."',
        aboutP3: 'Я стремлюсь, чтобы мои пациенты чувствовали уверенность, понимали свой диагноз и не жили в страхе перед гормонами, анализами или весом. Через просвещение и поддержку я влияю на качество жизни людей.',
        
        // Stats
        stat1Text: 'Пациентов прошли консультации',
        stat2Text: 'Пациентов в длительном сопровождении',
        stat3Text: 'Эксперт по терапии (Оземпик, Манджаро)',
        
        // Education
        educationTitle: 'Образование и Опыт',
        educationH3: 'Образование',
        experienceH3: 'Опыт работы',
        
        // Services
        servicesTitle: 'Какие проблемы я решаю',
        endocrinology: 'Эндокринология',
        dietology: 'Диетология',
        metabolicHealth: 'Метаболическое здоровье',
        servicesNote: 'Также доступен гайд «Школа диабета» на русском и казахском языках',
        
        // Reviews
        reviewsTitle: 'Отзывы пациентов',
        
        // Pricing
        pricingTitle: 'Стоимость приема',
        endocrinologist: 'Эндокринолог',
        dietitian: 'Диетолог',
        programs: 'Программы',
        inPerson: 'Очный прием',
        online: 'Онлайн прием',
        firstVisit: 'Первичный прием',
        followUp: 'Повторный прием',
        bookNow: 'Записаться сейчас',
        
        // Location
        locationTitle: 'Как нас найти',
        buildRoute: 'Построить маршрут',
        
        // Modal
        modalTitle: 'Записаться на прием',
        selectType: 'Выберите тип приема:',
        onlineVisit: 'Онлайн прием',
        offlineVisit: 'Очный прием',
        yourName: 'Ваше имя',
        phone: 'Телефон',
        email: 'Email',
        message: 'Сообщение',
        submitBtn: 'Отправить заявку'
    },
    kk: {
        // Navigation
        aboutNav: 'Мен туралы',
        servicesNav: 'Қызметтер',
        contactNav: 'Байланыс',
        
        // Hero
        heroTitle: 'Кристина Алексеевна',
        heroSubtitle: 'Балалар мен ересектерге арналған эндокринолог және диетолог.<br>Дәлелді медицина және жеке көзқарас.',
        btnOnline: 'Онлайн қабылдау',
        btnOffline: 'Жеке қабылдау',
        
        // About
        aboutTitle: 'Мен туралы',
        aboutP1: 'Мен адамдарға гормондарды түсінуге, тамақтануды реттеуге, организмін түсінуге және өзін жақсы сезінуге көмектесемін. Өз тәжірибемде халықаралық ұсыныстарды ұстанамын.',
        aboutP2: 'Өз блогымда әрбір адам гормондар, тамақтану және метаболикалық денсаулық туралы түсінікті жауаптар ала алатын кеңістік жасаймын.',
        aboutQuote: '"Менің мақсатым — адамдарға аңыздар мен ескірген тәсілдерден қазіргі заманғы, қауіпсіз және дәлелді шешімдерге көшуге көмектесу."',
        aboutP3: 'Мен пациенттерім сенімді сезінуін, диагнозын түсінуін және гормондардан, талдаулардан немесе салмақтан қорықпауын қалаймын. Ағарту мен қолдау арқылы адамдардың өмір сапасына әсер етемін.',
        
        // Stats
        stat1Text: 'Пациенттер консультация алды',
        stat2Text: 'Ұзақ мерзімді қолдау бойынша пациенттер',
        stat3Text: 'Терапия бойынша сарапшы (Оземпик, Манджаро)',
        
        // Education
        educationTitle: 'Білім және тәжірибе',
        educationH3: 'Білім',
        experienceH3: 'Жұмыс тәжірибесі',
        
        // Services
        servicesTitle: 'Мен қандай мәселелерді шешемін',
        endocrinology: 'Эндокринология',
        dietology: 'Диетология',
        metabolicHealth: 'Метаболикалық денсаулық',
        servicesNote: '«Диабет мектебі» нұсқаулығы орыс және қазақ тілдерінде қол жетімді',
        
        // Reviews
        reviewsTitle: 'Пациенттердің пікірлері',
        
        // Pricing
        pricingTitle: 'Қабылдау құны',
        endocrinologist: 'Эндокринолог',
        dietitian: 'Диетолог',
        programs: 'Бағдарламалар',
        inPerson: 'Жеке қабылдау',
        online: 'Онлайн қабылдау',
        firstVisit: 'Алғашқы қабылдау',
        followUp: 'Қайталама қабылдау',
        bookNow: 'Қазір жазылу',
        
        // Location
        locationTitle: 'Бізді қалай табуға болады',
        buildRoute: 'Бағыт құру',
        
        // Modal
        modalTitle: 'Қабылдауға жазылу',
        selectType: 'Қабылдау түрін таңдаңыз:',
        onlineVisit: 'Онлайн қабылдау',
        offlineVisit: 'Жеке қабылдау',
        yourName: 'Сіздің атыңыз',
        phone: 'Телефон',
        email: 'Email',
        message: 'Хабарлама',
        submitBtn: 'Өтінімді жіберу'
    }
};

// Load saved language or default to Russian
let currentLang = localStorage.getItem('language') || 'ru';

// Language switcher functionality
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.getAttribute('data-ru') ? (lang === 'ru' ? 'data-ru' : 'data-kk') : null;
        if (key) {
            link.textContent = link.getAttribute(key);
        }
    });
    
    // Update page content with data-lang attributes
    updatePageContent(lang);
}

function updatePageContent(lang) {
    const t = translations[lang];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
}

// Initialize language on page load
switchLanguage(currentLang);

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
