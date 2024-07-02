function toggleNav() {
  const navButtons = document.querySelectorAll('.nav-square');
  navButtons.forEach(button => {
    if (!button.classList.contains('.nav-square-toggle')) {
      button.classList.toggle('hidden');
    }
  });
}
