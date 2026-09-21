window.onload = () => {
  const c = setTimeout(() => {
    document.querySelector("main").classList.remove("not-loaded");
    clearTimeout(c);
  }, 2000);
};

// Function popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

function reopenPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const reopenBtn = document.getElementById("reopenBtn");
  const nextBtn = document.getElementById("nextBtn");
  const letterCard = document.getElementById("letterCard");
  const backBtn = document.getElementById("backBtn");

  popup.style.display = "none";
  reopenBtn.style.display = "none";
  letterCard.style.display = "none";

  setTimeout(function () {
    popup.style.display = "block";
    reopenBtn.style.display = "block";
  }, 4000);

  nextBtn.addEventListener("click", function () {
    popup.style.display = "none";
    letterCard.style.display = "flex";
  });

  backBtn.addEventListener("click", function () {
    letterCard.style.display = "none";
    popup.style.display = "block";
  });
});
