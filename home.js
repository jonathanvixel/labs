  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const toggle = document.getElementById('toggle');
      const menuItems = document.querySelector('.menu-items.mobile-menu');
      const overlay = document.querySelector('.overlay');

      toggle.addEventListener('click', function() {
        menuItems.classList.toggle('active');
        overlay.classList.toggle('active');
      });

      overlay.addEventListener('click', function() {
        menuItems.classList.remove('active');
        overlay.classList.remove('active');
      });

      // Add touch event listener for mobile devices
      toggle.addEventListener('touchstart', function() {
        menuItems.classList.toggle('active');
        overlay.classList.toggle('active');
      });
    });
  </script>
