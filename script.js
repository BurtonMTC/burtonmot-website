// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach(navLink => {
    navLink.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission (placeholder functionality)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For demonstration, just log the data and show an alert
        console.log({
            name,
            email,
            phone,
            subject,
            message
        });
        
        // Show success message
        alert('Thank you for your message. We will get back to you soon!');
        
        // Reset form
        contactForm.reset();
    });
}

// Add animation for service cards on scroll
const serviceCards = document.querySelectorAll('.service-card');
window.addEventListener('scroll', checkServiceCards);

function checkServiceCards() {
    const triggerBottom = window.innerHeight * 0.8;
    
    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        
        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    checkServiceCards();
    
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});

// Testimonial slider functionality
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Initialize testimonial display
if (testimonials.length > 0) {
    // Hide all testimonials initially
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });
    
    // Auto rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Form validation
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;
    
    // Simple validation for required fields
    if (!nameInput.value.trim()) {
        highlightError(nameInput);
        isValid = false;
    } else {
        removeError(nameInput);
    }
    
    if (!emailInput.value.trim()) {
        highlightError(emailInput);
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        highlightError(emailInput);
        isValid = false;
    } else {
        removeError(emailInput);
    }
    
    if (!messageInput.value.trim()) {
        highlightError(messageInput);
        isValid = false;
    } else {
        removeError(messageInput);
    }
    
    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function highlightError(input) {
    input.style.borderColor = 'red';
    input.style.backgroundColor = '#fff0f0';
}

function removeError(input) {
    input.style.borderColor = '#ced4da';
    input.style.backgroundColor = '#fff';
}

// Add validation to form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        if (!validateForm()) {
            e.preventDefault();
            alert('Please fill in all required fields correctly.');
        }
    });
}

// Back to top button functionality
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.display = 'none';
document.body.appendChild(backToTopBtn);

// Style the back to top button
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.zIndex = '99';
backToTopBtn.style.border = 'none';
backToTopBtn.style.outline = 'none';
backToTopBtn.style.backgroundColor = '#1a4ca5';
backToTopBtn.style.color = '#ffffff';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.padding = '15px';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.fontSize = '18px';
backToTopBtn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
backToTopBtn.style.transition = '0.3s';

backToTopBtn.addEventListener('mouseover', () => {
    backToTopBtn.style.backgroundColor = '#f8c51c';
    backToTopBtn.style.color = '#212529';
});

backToTopBtn.addEventListener('mouseout', () => {
    backToTopBtn.style.backgroundColor = '#1a4ca5';
    backToTopBtn.style.color = '#ffffff';
});

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Service booking form popup
const bookNowBtn = document.querySelector('.btn-primary');
if (bookNowBtn && bookNowBtn.textContent.includes('Book Now')) {
    bookNowBtn.addEventListener('click', (e) => {
        // Scroll to contact form and focus on subject field
        const subjectField = document.getElementById('subject');
        if (subjectField) {
            subjectField.value = 'Service Booking Request';
            setTimeout(() => {
                subjectField.focus();
            }, 1000); // Delay to allow smooth scroll to complete
        }
    });
}

// Add CSS animation class when elements come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .team-member, .about-content, .testimonial, .contact-grid > div');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
}

// Call animation function on scroll and on load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add current year to copyright text
const copyrightYear = document.querySelector('.copyright p');
if (copyrightYear) {
    const currentYear = new Date().getFullYear();
    copyrightYear.textContent = copyrightYear.textContent.replace('2025', currentYear);
}

document.addEventListener('DOMContentLoaded', function() {
    // Get carousel elements
    const track = document.getElementById('carouselTrack');
    const slides = Array.from(track.getElementsByClassName('carousel-slide'));
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    const indicators = Array.from(document.getElementsByClassName('carousel-indicator'));
    
    // Set up variables
    let currentIndex = 0;
    const slideCount = slides.length;
    let autoplayInterval;
    
    // Initialize
    updateCarousel();
    startAutoplay();
    
    // Set up event listeners
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
        resetAutoplay();
    });
    
    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
        resetAutoplay();
    });
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.getAttribute('data-index'));
            moveToSlide(index);
            resetAutoplay();
        });
    });
    
    track.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    track.addEventListener('mouseleave', () => {
        startAutoplay();
    });
    
    // Functions
    function moveToSlide(index) {
        // Handle index wraparound
        if (index < 0) {
            currentIndex = slideCount - 1;
        } else if (index >= slideCount) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        
        updateCarousel();
    }
    
    function updateCarousel() {
        // Move the track
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    function startAutoplay() {
        // Auto rotate every 3 seconds
        autoplayInterval = setInterval(() => {
            moveToSlide(currentIndex + 1);
        }, 3000);
    }
    
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }
});
// form boi
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    fetch("YOUR_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        if (res.ok) {
            alert("Thank you! Your message was sent.");
            document.getElementById("contactForm").reset();
        } else {
            alert("Oops! Something went wrong.");
        }
    })
    .catch(err => {
        console.error("Error:", err);
        alert("There was an error submitting the form.");
    });
});
