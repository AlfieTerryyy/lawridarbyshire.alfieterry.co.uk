    function toggleNav() {
      const navButtons = document.querySelectorAll('.nav-square');
      navButtons.forEach(button => {
        button.classList.toggle('hidden'); // Add a CSS class to hide/show the buttons
      });
    }
