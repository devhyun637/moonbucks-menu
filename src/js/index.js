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

    addEditEvent(items);
    addDeleteEvent(items);
  }

  function renderMenuItem(item) {
    return menuItem(item);
  }

  function addEditEvent(items) {
    const $editButtons = document.querySelectorAll(".menu-edit-button");

    [...$editButtons].forEach((button, index) =>
      button.addEventListener("click", () => onEditButton(items, index))
    );
  }

  function addDeleteEvent(items) {
    const $deleteButtons = document.querySelectorAll(".menu-remove-button");

    [...$deleteButtons].forEach((button, index) =>
      button.addEventListener("click", () => deleteButton(items, index))
    );
  }

  function onEditButton(items, index) {
    const editName = window.prompt(
      `${index + 1}번째 메뉴 ${items[index]}의 이름을 수정해주세요`
    );

    items.splice(index, 1, editName);
    updatedView(items);
  }

  function deleteButton(items, index) {
    window.confirm("정말로 삭제하시겠습니까?");

    items.splice(index, 1);
    updatedView(items);
  }
};

moonBucksApp();
