document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", function () {
      this.innerText = "You clicked it!";
      this.style.backgroundColor = "#33ffff";
      this.style.color = "#000";
    });
  }

  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.transition = "transform 0.6s";
      logo.style.transform = "rotate(360deg)";
    });

    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "rotate(0deg)";
    });
  }

  document.body.style.transition = "background-color 2s ease";
  document.body.style.backgroundColor = "#0a0f2c";
});