function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  }
  
  document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your booking has been received.");
  });
  