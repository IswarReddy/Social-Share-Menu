 const menu = document.querySelector(".menu");
  const toggle = document.querySelector(".toggle");

  // Optional sound on click
  const clickSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-click-melodic-tone-1129.mp3");

  toggle.addEventListener("click", () => {
    clickSound.play();
    menu.classList.toggle("active");
  });