// Global variables
let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
let expandedCard = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    setupBackToTop();
});

// Initialize page content
function initializePage() {
    updateContent();
    updateImages();
    updateTheme();
    
    // Set up intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

// Setup back to top functionality
function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLanguage);
    
    // Update HTML attributes
    document.documentElement.setAttribute('lang', currentLanguage);
    document.documentElement.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    
    // Update content
    updateContent();
    
    // Update language toggle button
    document.getElementById('lang-toggle').textContent = currentLanguage === 'en' ? 'العربية' : 'English';
}

// Toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    updateTheme();
}

// Update theme
function updateTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    
    // Update language toggle button text
    document.getElementById('lang-toggle').textContent = currentLanguage === 'en' ? 'العربية' : 'English';
}

// Update all content based on current language
function updateContent() {
    // Navbar
    document.getElementById('navbar-brand-text').textContent = siteConfig.brandName[currentLanguage];
    
    // Menu hero section
    document.getElementById('menu-hero-title').textContent = siteConfig.ui.ourMenu[currentLanguage];
    document.getElementById('menu-hero-subtitle').textContent = siteConfig.slogan[currentLanguage];
    document.getElementById('back-to-home-text').textContent = siteConfig.ui.backToHome[currentLanguage];
    
    // Menu section
    document.getElementById('hot-drinks-title').textContent = siteConfig.menuCategories.hotDrinks[currentLanguage];
    document.getElementById('frappe-title').textContent = siteConfig.menuCategories.frappe[currentLanguage];
    document.getElementById('juices-title').textContent = siteConfig.menuCategories.juices[currentLanguage];
    document.getElementById('milkshake-title').textContent = siteConfig.menuCategories.milkshake[currentLanguage];
    
    // Back to top button
    document.getElementById('back-to-top-text').textContent = siteConfig.ui.backToTop[currentLanguage];
    
    // Update menu items
    updateMenuItems();
    
    // Footer
    document.getElementById('footer-text').textContent = siteConfig.ui.footer[currentLanguage];
    
    // Update back to home button direction for RTL
    const backToHomeBtn = document.querySelector('.back-to-home-btn i');
    if (currentLanguage === 'ar') {
        backToHomeBtn.className = 'fas fa-arrow-right me-2';
    } else {
        backToHomeBtn.className = 'fas fa-arrow-left me-2';
    }
}

// Update menu items
function updateMenuItems() {
    const categories = ['hotDrinks', 'frappe', 'juices', 'milkshake'];
    
    categories.forEach(category => {
        const container = document.getElementById(`${category.replace(/([A-Z])/g, '-$1').toLowerCase()}-items`);
        container.innerHTML = '';
        
        siteConfig.menuCategories[category].items[currentLanguage].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item-card';
            itemDiv.innerHTML = `
                <div class="menu-item-content">
                    <div class="menu-item-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <span class="menu-item-name">${item.name}</span>
                </div>
                <span class="menu-item-price">${item.price}</span>
            `;
            container.appendChild(itemDiv);
        });
    });
}

// Update images
function updateImages() {
    document.getElementById('navbar-logo').src = siteConfig.images.logo;
    
    // Set background colors for menu cards
    document.getElementById('hot-drinks-header').style.background = 'linear-gradient(135deg, #8B4513, #A0522D)';
    document.getElementById('frappe-header').style.background = 'linear-gradient(135deg, #4682B4, #5F9EA0)';
    document.getElementById('juices-header').style.background = 'linear-gradient(135deg, #FF8C00, #FFA500)';
    document.getElementById('milkshake-header').style.background = 'linear-gradient(135deg, #FF69B4, #FF1493)';
}

// Toggle menu card
function toggleMenuCard(cardKey) {
    const card = document.querySelector(`#${cardKey}-content`).closest('.menu-card');
    const content = document.getElementById(`${cardKey}-content`);
    const arrow = card.querySelector('.menu-card-arrow i');
    
    if (expandedCard === cardKey) {
        // Close current card
        card.classList.remove('expanded');
        content.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)';
        expandedCard = null;
    } else {
        // Close all cards
        document.querySelectorAll('.menu-card').forEach(c => {
            c.classList.remove('expanded');
            const cardContent = c.querySelector('.menu-card-content');
            const cardArrow = c.querySelector('.menu-card-arrow i');
            cardContent.style.maxHeight = '0';
            cardArrow.style.transform = 'rotate(0deg)';
        });
        
        // Open selected card
        card.classList.add('expanded');
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
        expandedCard = cardKey;
    }
}