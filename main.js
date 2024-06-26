document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modal");
    const openModalBtns = document.querySelectorAll(".popup-btn");
    const closeBtn = document.getElementsByClassName("close")[0];
    const burgerMenu = document.getElementById("burgerMenu");
    const navLinks = document.getElementById("navLinks");
    const slides = document.querySelector('.slides');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');
    let currentSlide = 0;
  
    function openModal() {
      modal.style.display = "block";
    }
  
    function closeModal() {
      modal.style.display = "none";
    }
  
    openModalBtns.forEach(btn => {
      btn.addEventListener("click", openModal);
    });
  
    closeBtn.addEventListener("click", closeModal);
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        closeModal();
      }
    });
  
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burgerMenu.classList.toggle('nav-active');
    });
      
  
    function showSlide(index) {
      const totalSlides = slides.children.length;
      if (index >= totalSlides) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = totalSlides - 1;
      } else {
        currentSlide = index;
      }
      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  
    prevArrow.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
  
    nextArrow.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
  });
  


