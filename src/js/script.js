// Global variables
let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    showSplashScreen();
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

// Show splash screen
function showSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    // Update splash content
    document.getElementById('splash-logo').src = siteConfig.images.logo;
    document.getElementById('splash-title').textContent = siteConfig.brandName[currentLanguage];
    document.getElementById('splash-subtitle').textContent = siteConfig.slogan[currentLanguage];
    
    // Hide splash after 3 seconds
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.classList.add('loaded');
        }, 500);
    }, 3000);
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
    
    // Hero section
    document.getElementById('hero-title').textContent = siteConfig.brandName[currentLanguage];
    document.getElementById('hero-subtitle').textContent = siteConfig.slogan[currentLanguage];
    document.getElementById('hero-btn-text').textContent = siteConfig.ui.viewMenu[currentLanguage];
    
    // About section
    document.getElementById('about-title').textContent = siteConfig.ui.aboutUs[currentLanguage];
    document.getElementById('about-description').textContent = siteConfig.about[currentLanguage];
    document.getElementById('feature-1').textContent = siteConfig.ui.features.quality[currentLanguage];
    document.getElementById('feature-2').textContent = siteConfig.ui.features.love[currentLanguage];
    document.getElementById('feature-3').textContent = siteConfig.ui.features.award[currentLanguage];
    
    // Menu preview section
    document.getElementById('menu-preview-title').textContent = siteConfig.ui.ourMenu[currentLanguage];
    document.getElementById('menu-preview-description').textContent = siteConfig.ui.menuPreview[currentLanguage];
    document.getElementById('hot-drinks-preview').textContent = siteConfig.menuCategories.hotDrinks[currentLanguage];
    document.getElementById('frappe-preview').textContent = siteConfig.menuCategories.frappe[currentLanguage];
    document.getElementById('juices-preview').textContent = siteConfig.menuCategories.juices[currentLanguage];
    document.getElementById('view-menu-text').textContent = siteConfig.ui.viewMenu[currentLanguage];
    
    // Contact section
    document.getElementById('contact-title').textContent = siteConfig.ui.contactUs[currentLanguage];
    document.getElementById('get-in-touch').textContent = siteConfig.ui.getInTouch[currentLanguage];
    
    // Contact info
    document.getElementById('contact-phone').textContent = siteConfig.contact.phone;
    document.getElementById('contact-email').textContent = siteConfig.contact.email;
    document.getElementById('contact-address').textContent = siteConfig.contact.address[currentLanguage];
    
    // Back to top button
    document.getElementById('back-to-top-text').textContent = siteConfig.ui.backToTop[currentLanguage];
    
    // Footer
    document.getElementById('footer-text').textContent = siteConfig.ui.footer[currentLanguage];
}

// Update images
function updateImages() {
    document.getElementById('navbar-logo').src = siteConfig.images.logo;
    document.getElementById('hero-logo').src = siteConfig.images.logo;
    document.getElementById('about-img').src = siteConfig.images.about;
    document.getElementById('menu-preview-img').src = siteConfig.images.menuPreview;
    document.getElementById('facebook-link').href = siteConfig.socialMedia.facebook;
    document.getElementById('instagram-link').href = siteConfig.socialMedia.instagram;
    document.getElementById('tiktok-link').href = siteConfig.socialMedia.tiktok;
    document.getElementById('maps-iframe').src = siteConfig.mapsUrl;
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Show thank you message
    alert(siteConfig.ui.thankYou[currentLanguage]);
    
    // Reset form
    event.target.reset();
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', { name, email, message });
}