const navContainer = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle");

function toggleMenu() {
  navContainer.classList.toggle('active');
}

// Toggle menu on button click
toggleBtn.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".navlink");
navLinks.forEach(link => link.addEventListener('click', toggleMenu));