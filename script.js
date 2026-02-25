// ============================
// FULLSCREEN IMAGE MODAL
// ============================

const images = document.querySelectorAll(".gallery img");

const modal = document.createElement("div");
modal.classList.add("img-modal");

const modalImg = document.createElement("img");
modal.appendChild(modalImg);

document.body.appendChild(modal);

// Open modal
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("show");
    modalImg.src = img.src;
  });
});

// Close modal on click
modal.addEventListener("click", () => {
  modal.classList.remove("show");
});
