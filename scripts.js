const mainMenu = document.querySelector(".main-menu");
const menuItem = document.querySelectorAll(".menu-item");

function itemSelect(element) {
  let selector = 0;
  let previousSelector = 0;

  menuItem[selector].classList.add("selected");

  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        previousSelector = selector;
        selector = Math.max(0, selector - 1);
        console.log(selector);
        break;

      case "ArrowRight":
        event.preventDefault();
        previousSelector = selector;
        selector = Math.min(menuItem.length - 1, selector + 1);
        console.log(selector);
        break;
    }

    menuItem[previousSelector].classList.remove("selected");
    menuItem[selector].classList.add("selected");
  });
}

itemSelect();
