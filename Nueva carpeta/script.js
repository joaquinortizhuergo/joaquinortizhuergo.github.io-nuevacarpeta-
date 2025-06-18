// Toggle tema oscuro/claro
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
}

// Cargar tema guardado
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar/ocultar botón scroll to top
function toggleScrollButton() {
    const scrollButton = document.querySelector('.scroll-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
}

// Manejar envío del formulario
function handleSubmit(event) {
    event.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando emailjs o un servicio similar
    
    alert('¡Gracias por tu mensaje! Te responderé pronto.');
    event.target.reset();
}

// Animaciones al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-item, .project-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

// Event listeners
window.addEventListener('load', loadTheme);
window.addEventListener('scroll', () => {
    toggleScrollButton();
    animateOnScroll();
});

// Smooth scroll para los enlaces de navegación
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