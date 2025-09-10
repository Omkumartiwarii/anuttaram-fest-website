
// Create modal dynamically
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" alt="modal image">
    `;
document.body.appendChild(modal);

const modalImg = modal.querySelector("img");
const closeBtn = modal.querySelector(".close");

// All clickable images (winners + gallery)
const images = document.querySelectorAll(".winner-card img, .gallery img");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        document.body.classList.add("modal-open");
    });
});

// Close modal when clicking on X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
});

// Close modal when clicking outside image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});

// Close modal with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});