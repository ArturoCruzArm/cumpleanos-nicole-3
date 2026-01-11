// ===================================
// INICIALIZACIÓN
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🎂 ¡Bienvenido a la celebración de Nicole! 🎂',
        'font-size: 20px; color: #FF69B4; font-weight: bold;');

    initContentTransitions();
    initScrollAnimations();
    initSmoothScroll();
    initGallery();
});

// ===================================
// TRANSICIONES DE CONTENIDO
// ===================================
function initContentTransitions() {
    const contentSections = document.querySelectorAll('.content-section');

    if (contentSections.length === 0) {
        console.log('No se encontraron secciones de contenido');
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-80px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    contentSections.forEach(section => {
        observer.observe(section);
    });

    console.log('✅ Transiciones de contenido inicializadas');
}

// ===================================
// ANIMACIONES AL HACER SCROLL
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(`
        .gallery-item,
        .footer-message,
        .footer-names,
        .footer-age
    `);

    animatedElements.forEach((element, index) => {
        if (element.classList.contains('gallery-item')) {
            element.classList.add('fade-in-up');
        } else {
            element.classList.add('scale-in');
        }
        observer.observe(element);
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ===================================
// GALERÍA DE FOTOS
// ===================================
function initGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxCounter = document.getElementById('lightbox-counter');

    if (!galleryGrid) {
        console.log('Galería no encontrada');
        return;
    }

    // Array de rutas de imágenes - Cargado desde image-list.js
    // Si imageFiles no está definido, usar array vacío
    const images = typeof imageFiles !== 'undefined' ? imageFiles : [];

    let currentImageIndex = 0;

    // Cargar imágenes en la galería
    images.forEach((imageSrc, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Foto ${index + 1}`;
        img.loading = 'lazy'; // Lazy loading para mejor rendimiento

        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);

        // Click para abrir lightbox
        galleryItem.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    // Función para abrir lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = images[currentImageIndex];
        lightbox.classList.add('active');
        updateCounter();
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }

    // Función para cerrar lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }

    // Función para ir a la imagen anterior
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex];
        updateCounter();
    }

    // Función para ir a la siguiente imagen
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex];
        updateCounter();
    }

    // Actualizar contador
    function updateCounter() {
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
    }

    // Event listeners para lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', prevImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', nextImage);
    }

    // Cerrar lightbox al hacer click en el fondo
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    });

    console.log(`✅ Galería inicializada con ${images.length} imágenes`);
}

console.log('%c✨ Página cargada exitosamente ✨', 'font-size: 14px; color: #FF1493; font-weight: bold;');
