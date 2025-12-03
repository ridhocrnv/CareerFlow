/* --- HAMBURGER MENU (Navbar Mobile) --- */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-wrapper");

// Defensive Programming: Cek elemen ada atau tidak
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
        // Aksesibilitas
        const isActive = navMenu.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isActive);
    });

    // FIX: Menambahkan .login-link agar menu tertutup saat tombol Login diklik
    document.querySelectorAll(".menu-item, .sign-up, .login-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}

/* --- JOB FILTER TAGS (Interaksi Tombol Filter) --- */
// Ambil semua elemen dengan class .tag
const filterTags = document.querySelectorAll(".tag");

if (filterTags.length > 0) {
    filterTags.forEach(tag => {
        tag.addEventListener("click", () => {
            // 1. Hapus class 'active' dari semua tag
            filterTags.forEach(t => t.classList.remove("active"));
            
            // 2. Tambahkan class 'active' ke tag yang sedang diklik
            tag.classList.add("active");
        });
    });
}