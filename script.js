// Tour packages data
const tourPackages = [
    {
        id: 1,
        title: "Kasi Trips",
        destinations: "Ayodhya, Prayagraj, Varanasi, Triveni Sangamam, Gaya, Bodh Gaya",
        duration: "5 Days/4 Nights",
        price: 16800,
        category: "pilgrimage",
        image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2nd class sleeper train", "Deluxe A/C room double sharing", "Veg food", "A/C vehicle"],
        excludes: ["Special Dharshan tickets", "Food in trains"],
        featured: true
    },
    {
        id: 2,
        title: "Chardham Yatra",
        destinations: "New Delhi, Haridwar, Rishikesh, Yamunotri, Gangotri, Kedarnath, Badrinath",
        duration: "10 Nights/11 Days",
        price: 28000,
        category: "pilgrimage",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["Deluxe A/C rooms", "Good veg food", "A/C vehicle"],
        excludes: ["Train fare Chennai to Delhi", "Horse, dolly etc."],
        featured: true
    },
    {
        id: 3,
        title: "Mantralaya-Shiridi Trips",
        destinations: "Mantralayam, Panchamukhi, Bitchalaya, Solapur, Tuljapur, Siddeswara, Shiridi",
        duration: "5 Nights/6 Days",
        price: 12800,
        category: "pilgrimage",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2nd class sleeper train", "Good veg food", "A/C Bus 2/2-Seater", "Deluxe A/C rooms"],
        excludes: ["Special Dharshan Aarthis", "Food in trains"],
        featured: false
    },
    {
        id: 4,
        title: "Nepal Trips",
        destinations: "Banaras, Lumbini, Pokhara, Katmandu, Mukthinath, Manakamana, Janakpur",
        duration: "9 Nights/10 Days",
        price: 29000,
        category: "international",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star deluxe A/C rooms", "Good veg food", "Volvo A/C Bus"],
        excludes: ["Train fare", "Horse, dolly etc."],
        featured: true
    },
    {
        id: 5,
        title: "Pancha Dwaraka Trip",
        destinations: "Ahmedabad, Dwarakish Temple, Balahanuman Temple, Bet Dwaraka, Nageshwar, Somnath",
        duration: "7 Nights/8 Days",
        price: 20600,
        category: "pilgrimage",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star deluxe A/C rooms", "Good veg food", "A/C vehicle"],
        excludes: ["Train fares", "Food in trains"],
        featured: false
    },
    {
        id: 6,
        title: "Amarnath Yatra by Helipad",
        destinations: "New Delhi, Amarnath Cave",
        duration: "6 Nights/7 Days",
        price: 29600,
        category: "pilgrimage",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star deluxe A/C rooms", "Very good veg food", "A/C vehicle", "Helicopter service"],
        excludes: ["Personal expenses"],
        featured: false
    },
    {
        id: 7,
        title: "Amarnath Yatra by Trekking",
        destinations: "New Delhi, Pahalgham, Chandawari, Seshnag, Amarnath Cave",
        duration: "7 Nights/8 Days",
        price: 14500,
        category: "adventure",
        image: "https://images.unsplash.com/photo-1464822759844-d150baec4ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["Tents accommodation", "Room in Jammu & Delhi"],
        excludes: ["Food", "Horse, dolly", "Tent costs at Panchtarani"],
        featured: false
    },
    {
        id: 8,
        title: "Kashmir Trips Package (8 Days)",
        destinations: "New Delhi, Katra, Vaishnavodevi, Shivkori, Pahalgam, Gulmarg, Srinagar",
        duration: "7 Nights/8 Days",
        price: 18900,
        category: "adventure",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star deluxe A/C rooms", "Good veg food", "A/C vehicle"],
        excludes: ["Entrance tickets", "Rope car", "Boating", "Horse riding"],
        featured: true
    },
    {
        id: 9,
        title: "Kashmir Trip Package (6 Days)",
        destinations: "New Delhi, Jammu, Srinagar, Pahalgam, Gulmarg",
        duration: "5 Nights/6 Days",
        price: 16900,
        category: "adventure",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star deluxe A/C rooms", "Very good veg food", "A/C bus"],
        excludes: ["Entrance fees", "Rope car", "Boating", "Union vehicles"],
        featured: false
    },
    {
        id: 10,
        title: "Kullu Manali Trip",
        destinations: "New Delhi, Kurukshetra, Chandigarh, Atul Tunnel, Manali, Snow Point, Amritsar",
        duration: "5 Nights/6 Days",
        price: 17400,
        category: "adventure",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star deluxe A/C rooms", "Good veg food", "A/C vehicle"],
        excludes: ["Entrance fee", "Games fee", "Horses", "Boating"],
        featured: false
    },
    {
        id: 11,
        title: "Rajasthan Trip",
        destinations: "Jaipur, Jodhpur, Ajmer, Push Karni, Udaipur, Jaisalmer Sam",
        duration: "7 Nights/8 Days",
        price: 23400,
        category: "adventure",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star A/C deluxe rooms", "Good veg food", "A/C 2/2-seater bus"],
        excludes: ["Entrance fee", "Boating", "Camel ride"],
        featured: false
    },
    {
        id: 12,
        title: "Sikkim - Darjeeling Trip",
        destinations: "Kolkata, Siluguri, Darjeeling, Sikkim (Gangtok), Tsangu Lake, Nathulla Pass",
        duration: "6 Nights/7 Days",
        price: 22000,
        category: "adventure",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star deluxe accommodation", "Very good veg food", "A/C vehicle"],
        excludes: ["Games fees", "Entry fees", "Boating", "Special dharshan"],
        featured: false
    },
    {
        id: 13,
        title: "Goa Trips",
        destinations: "North Goa, South Goa",
        duration: "3 Nights/4 Days",
        price: 15000,
        category: "beach",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star deluxe accommodation", "Very good veg food", "A/C vehicle"],
        excludes: ["Games fees", "Entry fees", "Water games"],
        featured: false
    },
    {
        id: 14,
        title: "Bhutan Trip",
        destinations: "Thimphu, Paro, Punakha",
        duration: "6 Nights/7 Days",
        price: 35000,
        category: "international",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star deluxe accommodation", "Very good veg food", "A/C vehicle"],
        excludes: ["Games fees", "Entry fees", "Personal expenses"],
        featured: false
    },
    {
        id: 15,
        title: "Andaman Trips",
        destinations: "Port Blair, Havelock, Neil Island",
        duration: "4 Nights/5 Days",
        price: 16000,
        category: "beach",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star deluxe hotel", "Breakfast and dinner", "A/C vehicle"],
        excludes: ["Water games", "Scuba", "Flight fare Chennai to Port Blair"],
        featured: true
    },
    {
        id: 16,
        title: "Lakshadweep Trip",
        destinations: "Agatti, Andham Beach, Lagoon Beach, Kalpitty Island, Thinnakara Island",
        duration: "3 Nights/4 Days",
        price: 12500,
        category: "beach",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["Normal deluxe A/C rooms", "Veg & 2 non-veg meals", "A/C vehicle", "Glass boating"],
        excludes: ["Flight fares Kochi to Kochi", "Water games"],
        featured: false
    },
    {
        id: 17,
        title: "Thailand Trips",
        destinations: "Pattaya, Bangkok",
        duration: "4 Nights/5 Days",
        price: 45000,
        category: "international",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["3-star hotel", "Breakfast and dinner", "A/C vehicle"],
        excludes: ["Flight fare", "Afternoon lunch"],
        featured: false
    },
    {
        id: 18,
        title: "South Tamil Nadu Pilgrimage",
        destinations: "Tirupathi, Kalahasthi, Tiruttani, Kancheepuram, Tiruvannamalai, Chidambaram, Madurai, Rameswaram",
        duration: "Variable",
        price: 18000,
        category: "pilgrimage",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["2-star hotels EP Plan", "A/C vehicle"],
        excludes: ["Personal expenses"],
        featured: false
    },
    {
        id: 19,
        title: "Kerala Package",
        destinations: "Ernakulam, Alleppey Boat House",
        duration: "2 Nights/3 Days",
        price: 14000,
        category: "adventure",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["Boat house accommodation", "Meals", "A/C vehicle"],
        excludes: ["Personal expenses"],
        featured: false
    },
    {
        id: 20,
        title: "Bali Trips",
        destinations: "Bali Island, Temples, Beaches",
        duration: "4 Nights/5 Days",
        price: 13500,
        category: "international",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["Hotel accommodation", "Breakfast", "Local transport"],
        excludes: ["Flight fare", "Lunch and dinner"],
        featured: false
    },
    {
        id: 21,
        title: "Vietnam Trips",
        destinations: "Ho Chi Minh City, Hanoi, Ha Long Bay, Hoi An",
        duration: "On Request",
        price: 0,
        category: "international",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        includes: ["3* Stay", "Veg Food", "A/C Transport"],
        excludes: ["Flight fare", "Personal expenses"],
        featured: false
    }
];

// Global variables
let filteredPackages = [...tourPackages];
let currentPackages = [...tourPackages];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    loadAllPackages();
    setupEventListeners();
    setupNavigation();
}

// Setup event listeners
function setupEventListeners() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(searchPackages, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchPackages();
            }
        });
    }

    // Filter change listeners
    const filters = ['durationFilter', 'priceFilter', 'categoryFilter'];
    filters.forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', applyFilters);
        }
    });

    // Modal functionality
    const modal = document.getElementById('packageModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Setup navigation
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
}


// Load all packages
function loadAllPackages() {
    const packagesContainer = document.getElementById('packagesGrid');
    if (!packagesContainer) return;

    packagesContainer.innerHTML = currentPackages.map(pkg => createPackageCard(pkg)).join('');
}

// Create package card HTML
function createPackageCard(pkg) {
    const durationDays = parseInt(pkg.duration.split(' ')[0]);
    const priceText = pkg.price && pkg.price > 0 ? `₹${pkg.price.toLocaleString()}` : 'On Request';
    const badgeText = pkg.category === 'international' ? 'International' : 
                     pkg.category === 'pilgrimage' ? 'Pilgrimage' :
                     pkg.category === 'adventure' ? 'Adventure' : 'Beach';

    return `
        <div class="package-card" onclick="openPackageModal(${pkg.id})">
            <div class="package-image">
                <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
                <div class="package-badge">${badgeText}</div>
            </div>
            <div class="package-content">
                <h3 class="package-title">${pkg.title}</h3>
                <p class="package-destinations">${pkg.destinations}</p>
                <div class="package-details">
                    <div class="package-duration">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${pkg.duration}</span>
                    </div>
                    <div class="package-price">${priceText}</div>
                </div>
                <div class="package-features">
                    <div class="feature-item">
                        <i class="fas fa-bed"></i>
                        <span>A/C Rooms</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-utensils"></i>
                        <span>Veg Meals</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-bus"></i>
                        <span>Transport</span>
                    </div>
                </div>
                <div class="package-actions">
                    <button class="btn-outline" onclick="event.stopPropagation(); openPackageModal(${pkg.id})">
                        <i class="fas fa-info-circle"></i> View Details
                    </button>
                    <button class="btn-outline" onclick="event.stopPropagation(); contactForBooking('${pkg.title}')">
                        <i class="fas fa-phone"></i> Book Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Open package modal
function openPackageModal(packageId) {
    const pkg = tourPackages.find(p => p.id === packageId);
    if (!pkg) return;

    const modal = document.getElementById('packageModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;

    const priceText = pkg.price && pkg.price > 0 ? `₹${pkg.price.toLocaleString()}` : 'On Request';
    modalContent.innerHTML = `
        <div class="modal-image">
            <img src="${pkg.image}" alt="${pkg.title}" />
        </div>
        
        <div class="modal-header">
            <h2 class="modal-title">${pkg.title}</h2>
            <p class="modal-subtitle">${pkg.destinations}</p>
        </div>
        
        <div class="price-highlight">
            <h3>${priceText}${priceText !== 'On Request' ? ' per person' : ''}</h3>
            <p>${pkg.duration}</p>
        </div>
        
        <div class="modal-details">
            <div class="detail-section">
                <h4><i class="fas fa-check-circle"></i> Includes</h4>
                <ul class="detail-list">
                    ${pkg.includes.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-times-circle"></i> Excludes</h4>
                <ul class="detail-list">
                    ${pkg.excludes.map(item => `<li><i class="fas fa-times"></i> ${item}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="contactForBooking('${pkg.title}')">
                <i class="fas fa-phone"></i> Contact for Booking
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('packageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Search packages
function searchPackages() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        currentPackages = [...filteredPackages];
    } else {
        currentPackages = filteredPackages.filter(pkg => 
            pkg.title.toLowerCase().includes(searchTerm) ||
            pkg.destinations.toLowerCase().includes(searchTerm) ||
            pkg.category.toLowerCase().includes(searchTerm)
        );
    }
    
    loadAllPackages();
    
    // Show search results message
    const packagesContainer = document.getElementById('packagesGrid');
    if (packagesContainer && currentPackages.length === 0) {
        packagesContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3>No packages found</h3>
                <p>Try adjusting your search terms or filters.</p>
            </div>
        `;
    }
}

// Apply filters
function applyFilters() {
    const durationFilter = document.getElementById('durationFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    filteredPackages = tourPackages.filter(pkg => {
        let matches = true;
        
        // Duration filter
        if (durationFilter) {
            const packageDays = parseInt(pkg.duration.split(' ')[0]);
            // If duration is non-numeric (e.g., 'On Request'), skip duration filtering for this package
            if (!isNaN(packageDays)) {
                switch(durationFilter) {
                    case '3-4':
                        matches = matches && (packageDays >= 3 && packageDays <= 4);
                        break;
                    case '5-6':
                        matches = matches && (packageDays >= 5 && packageDays <= 6);
                        break;
                    case '7-8':
                        matches = matches && (packageDays >= 7 && packageDays <= 8);
                        break;
                    case '9+':
                        matches = matches && (packageDays >= 9);
                        break;
                }
            }
        }
        
        // Price filter
        if (priceFilter) {
            switch(priceFilter) {
                case '0-15000':
                    matches = matches && (pkg.price < 15000);
                    break;
                case '15000-20000':
                    matches = matches && (pkg.price >= 15000 && pkg.price < 20000);
                    break;
                case '20000-25000':
                    matches = matches && (pkg.price >= 20000 && pkg.price < 25000);
                    break;
                case '25000+':
                    matches = matches && (pkg.price >= 25000);
                    break;
            }
        }
        
        // Category filter
        if (categoryFilter) {
            matches = matches && (pkg.category === categoryFilter);
        }
        
        return matches;
    });
    
    // Reset search and apply filters
    document.getElementById('searchInput').value = '';
    currentPackages = [...filteredPackages];
    loadAllPackages();
}

// Contact for booking
function contactForBooking(packageName) {
    const phone = '+919790835042';
    const message = `Hi, I'm interested in booking the ${packageName} package. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    // Try WhatsApp first, fallback to phone call
    window.open(whatsappUrl, '_blank') || window.open(`tel:${phone}`, '_self');
    
    // Also scroll to contact section
    setTimeout(() => {
        scrollToSection('contact');
    }, 1000);
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        packageInterest: document.getElementById('packageInterest').value,
        message: document.getElementById('message').value
    };
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<div class="loading"></div> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your inquiry! We will contact you soon.');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const sectionTop = section.offsetTop - navHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
        });
    });
});

// Initialize animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe package cards
    document.querySelectorAll('.package-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call scroll animations after packages are loaded
setTimeout(initScrollAnimations, 100);
