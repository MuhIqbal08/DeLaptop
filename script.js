const navMobile = document.getElementById("navMobile");
const hamburgerMenu = document.getElementById("hamburgerMenu");

hamburgerMenu.onclick = (event) => {
    event.preventDefault(); // Mencegah perilaku default <a>
    
    // Toggle visibilitas dengan transisi
    if (navMobile.classList.contains('translate-x-full')) {
        // Buka sidebar: animasi ke kiri (ke posisi semula)
        navMobile.classList.remove('translate-x-full', 'opacity-0');
        navMobile.classList.add('translate-x-0', 'opacity-100');
    } else {
        // Tutup sidebar: animasi ke kanan
        navMobile.classList.remove('translate-x-0', 'opacity-100');
        navMobile.classList.add('translate-x-full', 'opacity-0');
    }
}

// Menutup sidebar saat klik di luar hamburger atau sidebar
document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target) && !navMobile.contains(event.target)) {
        // Animasi ke kanan saat ditutup
        navMobile.classList.remove('translate-x-0', 'opacity-100');
        navMobile.classList.add('translate-x-full', 'opacity-0');
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 28,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 28,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
});

