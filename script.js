const menuButton = document.getElementById("burger");
const menu = document.getElementById("menu");

// Toggle menu saat tombol diklik
menuButton.addEventListener("click", function(e) {
    e.stopPropagation(); // Cegah event bubbling
    menu.classList.toggle("show");
});

// Sembunyikan menu saat klik di luar
document.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
        menu.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}