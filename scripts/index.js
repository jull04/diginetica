// Данные о карточках товаров (можно загрузить с сервера или использовать статические данные)
const cardsData = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];

// Находим шаблон карточки товара по его id
const template = document.getElementById("cardTemplate");

// Находим контейнер для карточек товаров
const cardGrid = document.getElementById("cardGrid");

// Цикл для создания и добавления карточек товаров на страницу
cardsData.forEach(() => {
  // Клонируем содержимое шаблона
  const clone = document.importNode(template.content, true);

  // Добавляем клонированный элемент карточки товара в контейнер на странице
  cardGrid.appendChild(clone);
});
