const mainMenu = document.querySelector(".main-menu");
const menuItem = document.querySelectorAll(".menu-item");

function itemSelect(element) {
  let selector = 0;
  let previousSelector = 0;

  menuItem[selector].classList.add("selected");
  menuItem[selector].classList.add("active");

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
    menuItem[previousSelector].classList.remove("active");
    menuItem[selector].classList.add("selected");
    menuItem[selector].classList.add("active");
  });
}

itemSelect();

const selected = document.querySelector(".selected");

async function animateSelection() {
  //Enlargen title with selected.animate
  selected.animate([{ transform: "scale(1)" }, { transform: "scale(1.2)" }], {
    duration: 400,
    easing: "ease-out",
    fill: "forwards",
  });

  //reveal white polygon
  ([
    { opacity: 0, transform: "scale(0.7)" },
    { opacity: 1, transform: "scale(1)" },
  ],
    {
      duration: 350,
      easing: "ease-out",
      fill: "forwards",
      pseudoElement: "::before",
    }.finished);
}

animateSelection();
