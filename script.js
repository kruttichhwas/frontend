
document.addEventListener("DOMContentLoaded", () => {
    scalePageBasedOnWidth();
    window.addEventListener("resize", scalePageBasedOnWidth);
    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const leftMenu = document.getElementById("leftMenu");
  
    menuToggleBtn.addEventListener("click", () => {
      leftMenu.classList.toggle("collapsed");
    });
  });
  
  function scalePageBasedOnWidth() {
    const width = window.innerWidth;
    let scaleValue = 1.0;
  
    if (width >= 992 && width <= 1600) {
      scaleValue = 0.9;
    } else if (width >= 700 && width <= 767) {
      scaleValue = 0.8;
    } else if (width >= 600 && width < 700) {
      scaleValue = 0.75;
    } else if (width <= 600) {
      scaleValue = 0.5;
    }
    document.body.style.transform = `scale(${scaleValue})`;
  }
  