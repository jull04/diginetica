# Тестовое diginetica

link: https://jull04.github.io/diginetica/

1. Каким будет результат следующей операции на языке JavaScript: [1, 2, 3] + [4, 5, 6]. Почему был получен такой результат?

Результатом будет строка ‘1, 2, 34, 5, 6’, так как при сложении двух массивов они преобразуются в строки и при сложении двух строк происходит конкатенация.

2. Дано выражение:
var a = {b: 1};
var b = a;
b.b = 2;
console.log(a);
Что будет выведено в консоли? Почему был получен такой результат?

В консоли будет выведено {b: 2}, так как объекты в JS являются ссылочным типом  данным,  и в данном случае два объекта ссылаются на один и тот же объект, и при изменении в одном объекте они происходят и в другом.

3. Написать регулярное выражение, совпадающее с числом с плавающей точкой с точностью до 3 знака после запятой.

```
/^-?\d+(\.\d{1,3})?$/
```

^ - начало строки
\d - ищет любые цифры
? - необязательное наличие, может быть положительным и отрицательным и без дробной части
'+' - одна или более цифр перед запятой
\d{1,3 - после точки может быть от одной до трех цифр
$ - конец строки

```
const regex = /^-?\d+(\.\d{1,3})?$/;
const number = 3.14;
regex.test(number); //true
```

test — метод объекта RegExp. Поэтому мы вызываем его
как метод переменной и передаем строку как аргумент.

4. Написать регулярное выражение, по которому определяется является ли строка ссылкой. Объяснить, как оно работает.
Пример:
const isURL = str => true
isURL(‘https://example.com’)
isURL(‘http://www.example.com’)

```
const isURL = (str) => /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9._-]*)*$/.test(str);

console.log(isURL('https://example.com')); // true
```

([a-zA-Z0-9-]+\.)+  совпадает с одним или более сегментами, состоящими из букв, цифр или дефисов, за которыми следует точка.
[a-zA-Z]{2,6}  совпадает с доменом верхнего уровня, состоящим из 2-6 букв.
(\/[a-zA-Z0-9._-]*)*: Опционально совпадает с одним или более сегментами пути, состоящими из букв, цифр, точек, подчеркиваний и дефисов.

5. Каким будет значение переменной text после выполнения данного JavaScript кода?
function setText(message) {
text = message;
 }
 var text = 'Текст';
 setText('Сообщение');
Опишите, почему получился такой результат.

Значение переменной будет ‘Сообщение’, потому  что при вызове функции setText мы передаем в виде аргумента 'Сообщение’, и это значение присваивается переменной. Переменная внутри блока, то есть внутри функции, имеет больший приоритет,  и если бы движок JS не нашел переменную внутри функции, только после этого он бы начал искать переменную в глобальной области видимости и присвоил бы значение, объявленное через var.

6.
Написать функцию для получения список всех артикулов товаров в консоли браузера на странице https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog

```
function getIds () {
  let products = document.querySelectorAll('._product');
  let productIds = [...products].map(product => product.getAttribute('data-id'));
  console.log(productIds);
}
```

7.
Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/

```
function getAttributes() {
  const names = document.querySelectorAll('.parameter-name');
  const values = document.querySelectorAll('.parameter-value');
  const attributes = Object.fromEntries(
    Array.from(names).map((name, index) => [
      name.innerText,
      values[index].innerText
    ])
  );
  console.log(attributes);
}
```
