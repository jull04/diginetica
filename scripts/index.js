// Данные о карточках товаров (можно загрузить с сервера или использовать статические данные)
const cardsData = [
  {}, // Карточка товара 1
  {}, // Карточка товара 2
  {}, // Карточка товара 3
  {}, // Карточка товара 4
  {}, // Карточка товара 5
  {}, // Карточка товара 6
  {}, // Карточка товара 7
  {}, // Карточка товара 8
  {}, // Карточка товара 9
  {}, // Карточка товара 10
  {}, // Карточка товара 11
  {}  // Карточка товара 12
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