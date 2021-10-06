export default function mobileMenu() {
    const mobMenBtn = document.querySelector('.mobile-menu-btn');
    const mobMen = document.querySelector('.mobile-menu');
    if (mobMenBtn && mobMen) {
        mobMenBtn.addEventListener('click', function(e) {
            // e.preventDefault();
            // console.log('huzzah')
            mobMenBtn.classList.toggle('active');
            // mobMen.classList.toggle('active');
        })
    }
}