// Site Configuration - Edit these values to customize your café
const siteConfig = {
  // Brand Information
  brandName: {
    en: "Golden Bean Café",
    ar: "مقهى الحبة الذهبية"
  },
  
  slogan: {
    en: "Where tradition meets perfection",
    ar: "حيث يلتقي التراث بالكمال"
  },
  
  // Contact Information
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@goldenbean.com",
    address: {
      en: "123 Heritage Street, Old City",
      ar: "شارع التراث 123، المدينة القديمة"
    }
  },
  
  // Social Media Links
  socialMedia: {
    facebook: "https://facebook.com/goldenbeanCafe",
    instagram: "https://instagram.com/goldenbeanCafe", 
    tiktok: "https://tiktok.com/@goldenbeanCafe"
  },
  
  // Google Maps Embed URL
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.00123456789012!3d40.71234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ0LjQiTiA3NMKwMDAnMDQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  
  // Images - Replace with your own URLs
  images: {
    logo: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    hero: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
    about: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    menuPreview: "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    hotDrinks: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    frappe: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    juices: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    milkshake: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
  },
  
  // Color Scheme
  colors: {
    primary: "#1a365d",      // Dark navy
    secondary: "#d4af37",    // Light gold
    accent: "#8b9dc3",       // Chic gray
    background: "#fefefe",   // Pure white
    darkBg: "#2d3748",       // Dark gray for dark mode
    darkText: "#f7fafc"      // Light text for dark mode
  },
  
  // Content
  about: {
    en: "Welcome to Golden Bean Café, where every cup tells a story of tradition and excellence. Our carefully curated selection of premium beverages and artisanal treats creates an atmosphere of warmth and sophistication.",
    ar: "مرحباً بكم في مقهى الحبة الذهبية، حيث يحكي كل كوب قصة من التراث والتميز. تشكيلتنا المختارة بعناية من المشروبات الفاخرة والحلويات الحرفية تخلق أجواءً من الدفء والرقي."
  },
  
  // Menu Categories with prices
  menuCategories: {
    hotDrinks: {
      en: "Hot Drinks",
      ar: "المشروبات الساخنة",
      items: {
        en: [
          { name: "Espresso", price: "25 EGP" },
          { name: "Cappuccino", price: "35 EGP" },
          { name: "Latte", price: "40 EGP" },
          { name: "Turkish Coffee", price: "30 EGP" },
          { name: "Green Tea", price: "20 EGP" },
          { name: "Earl Grey", price: "22 EGP" }
        ],
        ar: [
          { name: "إسبريسو", price: "25 جنيه" },
          { name: "كابتشينو", price: "35 جنيه" },
          { name: "لاتيه", price: "40 جنيه" },
          { name: "قهوة تركية", price: "30 جنيه" },
          { name: "شاي أخضر", price: "20 جنيه" },
          { name: "إيرل جراي", price: "22 جنيه" }
        ]
      }
    },
    frappe: {
      en: "Frappé",
      ar: "فرابيه",
      items: {
        en: [
          { name: "Vanilla Frappé", price: "45 EGP" },
          { name: "Chocolate Frappé", price: "50 EGP" },
          { name: "Caramel Frappé", price: "48 EGP" },
          { name: "Coffee Frappé", price: "42 EGP" }
        ],
        ar: [
          { name: "فرابيه فانيليا", price: "45 جنيه" },
          { name: "فرابيه شوكولاته", price: "50 جنيه" },
          { name: "فرابيه كراميل", price: "48 جنيه" },
          { name: "فرابيه قهوة", price: "42 جنيه" }
        ]
      }
    },
    juices: {
      en: "Fresh Juices",
      ar: "العصائر الطازجة",
      items: {
        en: [
          { name: "Orange Juice", price: "28 EGP" },
          { name: "Apple Juice", price: "25 EGP" },
          { name: "Mixed Berry", price: "35 EGP" },
          { name: "Mango Passion", price: "38 EGP" },
          { name: "Green Detox", price: "40 EGP" }
        ],
        ar: [
          { name: "عصير برتقال", price: "28 جنيه" },
          { name: "عصير تفاح", price: "25 جنيه" },
          { name: "عصير التوت المشكل", price: "35 جنيه" },
          { name: "عصير المانجو", price: "38 جنيه" },
          { name: "عصير التخلص من السموم", price: "40 جنيه" }
        ]
      }
    },
    milkshake: {
      en: "Milkshakes",
      ar: "الميلك شيك",
      items: {
        en: [
          { name: "Strawberry Shake", price: "42 EGP" },
          { name: "Chocolate Shake", price: "45 EGP" },
          { name: "Vanilla Shake", price: "40 EGP" },
          { name: "Oreo Shake", price: "48 EGP" }
        ],
        ar: [
          { name: "ميلك شيك فراولة", price: "42 جنيه" },
          { name: "ميلك شيك شوكولاته", price: "45 جنيه" },
          { name: "ميلك شيك فانيليا", price: "40 جنيه" },
          { name: "ميلك شيك أوريو", price: "48 جنيه" }
        ]
      }
    }
  },
  
  // UI Text
  ui: {
    viewMenu: {
      en: "View Our Menu",
      ar: "اطلع على القائمة"
    },
    aboutUs: {
      en: "About Us",
      ar: "من نحن"
    },
    ourMenu: {
      en: "Our Menu",
      ar: "قائمتنا"
    },
    menuPreview: {
      en: "Discover our carefully crafted selection of premium beverages, from traditional hot drinks to refreshing cold specialties. Each category offers unique flavors that celebrate both heritage and innovation.",
      ar: "اكتشف تشكيلتنا المصنوعة بعناية من المشروبات الفاخرة، من المشروبات الساخنة التقليدية إلى التخصصات الباردة المنعشة. كل فئة تقدم نكهات فريدة تحتفل بالتراث والابتكار معاً."
    },
    orderNow: {
      en: "ORDER NOW",
      ar: "اطلب الآن"
    },
    contactUs: {
      en: "Contact Us",
      ar: "تواصل معنا"
    },
    getInTouch: {
      en: "Get in Touch",
      ar: "تواصل معنا"
    },
    name: {
      en: "Name",
      ar: "الاسم"
    },
    email: {
      en: "Email",
      ar: "البريد الإلكتروني"
    },
    message: {
      en: "Message",
      ar: "الرسالة"
    },
    sendMessage: {
      en: "Send Message",
      ar: "إرسال الرسالة"
    },
    namePlaceholder: {
      en: "Your Name",
      ar: "اسمك"
    },
    emailPlaceholder: {
      en: "Your Email",
      ar: "بريدك الإلكتروني"
    },
    messagePlaceholder: {
      en: "Your Message",
      ar: "رسالتك"
    },
    backToHome: {
      en: "Back to Home",
      ar: "العودة للرئيسية"
    },
    backToTop: {
      en: "Back to Top",
      ar: "العودة للأعلى"
    },
    features: {
      quality: {
        en: "Premium Quality",
        ar: "جودة فائقة"
      },
      love: {
        en: "Made with Love",
        ar: "مصنوع بحب"
      },
      award: {
        en: "Award Winning",
        ar: "حائز على جوائز"
      }
    },
    footer: {
      en: "Powered by Mosa © 2024",
      ar: "مدعوم من موسى © 2024"
    },
    thankYou: {
      en: "Thank you for your message!",
      ar: "شكراً لك على رسالتك!"
    }
  }
};