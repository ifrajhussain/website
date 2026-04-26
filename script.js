// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fake form submit
document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Appointment request submitted!");
});