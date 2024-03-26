document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const menuItems = document.querySelector('.menu-items');

    toggle.addEventListener('click', function() {
        menuItems.classList.toggle('active');
    });
});
