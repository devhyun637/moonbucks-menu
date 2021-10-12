import { menuItem } from "./templates/menuItem.js";

const moonBucksApp = () => {
  const $menuList = document.querySelector("#espresso-menu-list");
  const $menuInputForm = document.querySelector("#espresso-menu-form");
  const $menuCount = document.querySelector(".menu-count");

  const menuItems = [];

  $menuInputForm.addEventListener("submit", onSubmitMenuName);

  function onSubmitMenuName(event) {
    event.preventDefault();

    const menuName = event.target["espresso-menu-name"].value;
    if (menuName === "") return;

    menuItems.push(menuName);

    updatedView(menuItems);
  }

  function updatedView(items) {
    renderMenuList(items);
    $menuCount.innerText = `총 ${items.length}개`;

    $menuInputForm.reset();
  }

  function renderMenuList(items) {
    $menuList.innerHTML = items.map(renderMenuItem).join("");
  }

  function renderMenuItem(item) {
    return menuItem(item);
  }
};

moonBucksApp();
