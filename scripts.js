const mainMenu = document.querySelector(".main-menu");
const menuItem = document.querySelectorAll(".menu-item");

function itemSelect(element) {
  let selector = 0;
  let overlay = selector + 3;
  let previousSelector = 0;
  let previousOverlay = previousSelector + 3;

  menuItem[selector].classList.add("selected");
  menuItem[overlay].classList.add("selected");

  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        previousSelector = selector;
        previousOverlay = overlay;
        selector = Math.max(0, selector - 1);
        overlay = Math.max(0, overlay - 1);
        console.log("selector = " + selector);
        console.log("overlay = " + overlay);
        break;

      case "ArrowRight":
        event.preventDefault();
        previousSelector = selector;
        previousOverlay = overlay;
        selector = Math.min(menuItem.length / 2 - 1, selector + 1);
        overlay = Math.min(menuItem.length / 2, selector + 1);
        console.log(selector);
        break;
    }

    menuItem[previousSelector].classList.remove("selected");
    menuItem[selector].classList.add("selected");
  });
}

itemSelect();
