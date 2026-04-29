// ==========================================
// LIQUID BIOPSY RESEARCH - JAVASCRIPT
// Enhanced interactivity and functionality
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSmoothScrolling();
    initializeLazyLoadImages();
    initializeScrollAnimations();
    initializeTableOfContents();
});

// ==========================================
// NAVIGATION HIGHLIGHTING
// ==========================================
function initializeNavigation() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// LAZY LOADING FOR IMAGES
// ==========================================
function initializeLazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initializeScrollAnimations() {
    const cards = document.querySelectorAll('.feature-card, .study-card, .biomarker-card');
    
    if ('IntersectionObserver' in window) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            cardObserver.observe(card);
        });
    }
}

// ==========================================
// TABLE OF CONTENTS GENERATION
// ==========================================
function initializeTableOfContents() {
    // Future enhancement: auto-generate ToC from h2/h3 headers
    // This is a placeholder for potential future functionality
}

// ==========================================
// FORM SUBMISSION (if feedback form is added)
// ==========================================
function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Show confirmation
    alert('Thank you for your feedback! We appreciate your input.');
    form.reset();
}

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================
document.addEventListener('keydown', function(e) {
    // Skip to main content (Alt + M)
    if (e.altKey && e.key === 'm') {
        const mainContent = document.querySelector('.content-container');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView();
        }
    }
    
    // Skip to navigation (Alt + N)
    if (e.altKey && e.key === 'n') {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.focus();
            navbar.scrollIntoView();
        }
    }
});

// ==========================================
// PRINT OPTIMIZATION
// ==========================================
function printPage() {
    window.print();
}

// ==========================================
// THEME TOGGLE (Optional dark mode - not implemented by default)
// ==========================================
function initializeThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
function initializeScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    
    // Add styles
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background-color: #0066cc;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollTopBtn.addEventListener('mouseover', () => {
        scrollTopBtn.style.backgroundColor = '#003d7a';
        scrollTopBtn.style.transform = 'scale(1.1)';
    });
    
    scrollTopBtn.addEventListener('mouseout', () => {
        scrollTopBtn.style.backgroundColor = '#0066cc';
        scrollTopBtn.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeScrollToTop);
} else {
    initializeScrollToTop();
}

// ==========================================
// ANALYTICS & PAGE TRACKING (Optional)
// ==========================================
function trackPageView() {
    const pageTitle = document.title;
    const pageURL = window.location.href;
    console.log(`Viewing: ${pageTitle} - ${pageURL}`);
    // Add your analytics code here if needed
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Copy to clipboard function for citations
function copyCitation(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Citation copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy citation. Please try again.');
    });
}

// Format date helper
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Debounce function for scroll/resize events
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ==========================================
// ERROR HANDLING
// ==========================================
window.addEventListener('error', function(event) {
    console.error('Error:', event.error);
    // Add error tracking here if needed
});

// ==========================================
// EXPORT FUNCTIONALITY (Future Enhancement)
// ==========================================
function exportToCSV(tableId, filename) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    let csv = [];
    const rows = table.querySelectorAll('tr');
    
    rows.forEach(row => {
        const cols = row.querySelectorAll('td, th');
        let csvRow = [];
        cols.forEach(col => {
            csvRow.push(col.textContent);
        });
        csv.push(csvRow.join(','));
    });
    
    downloadCSV(csv.join('\n'), filename);
}

function downloadCSV(csv, filename) {
    const csvFile = new Blob([csv], { type: 'text/csv' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(csvFile);
    downloadLink.download = filename;
    downloadLink.click();
}

// ==========================================
// PAGE LOAD TIMING (Performance monitoring)
// ==========================================
document.addEventListener('load', function() {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time:', pageLoadTime, 'ms');
});

// ==========================================
// DOCUMENT READY CHECK
// ==========================================
console.log('Liquid Biopsy Research - JavaScript initialized');
