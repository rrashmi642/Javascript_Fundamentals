const containerRef = document.getElementById("star-container");
const starRef = document.querySelectorAll(".star");
const countRef = document.getElementById("count");

let selectedRating = 0; // Global selected rating (0 to 5)

// Function to add/remove star-filled class based on rating
function updateStars(rating) {
  for (let i = 0; i < starRef.length; i++) {
    if (i < rating) {
      starRef[i].classList.add("star-filled");
    } else {
      starRef[i].classList.remove("star-filled");
    }
  }
}

// Mouseover: highlight stars up to hovered
containerRef.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("star")) {
    const index = Number(e.target.getAttribute("data-index"));
    updateStars(index);
  }
});

// Mouseout: reset to selected rating
containerRef.addEventListener("mouseout", () => {
  updateStars(selectedRating);
});

// Click: lock rating and update count
containerRef.addEventListener("click", (e) => {
  if (e.target.classList.contains("star")) {
    selectedRating = Number(e.target.getAttribute("data-index"));
    updateStars(selectedRating);
    countRef.textContent = selectedRating;
  }
});