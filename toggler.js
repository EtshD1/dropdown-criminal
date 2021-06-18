(() => {
  const toggler = document.querySelector(".dropdown button");
  const menu = document.querySelector(".dropdown ul");

  let active = false;

  toggler.addEventListener("focus", () => menu.classList.add("active"));
  toggler.addEventListener("blur", () => menu.classList.remove("active"));

  toggler.addEventListener("click", () => {
    if (active) {
      active = false;
      toggler.blur();
      return;
    }
    active = true;
  })
})();