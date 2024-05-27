# ignasiya-array-utils

Простая NPM-библиотека с полезными функциями для работы с массивами.

## Установка

Вы можете установить библиотеку, используя npm:

```bash
npm install ignasiya-array-utils
```

## Использование

Импортируйте библиотеку в ваш JavaScript-файл:

```js
const arrayUtils = require('ignasiya-array-utils');
```

Теперь вы можете использовать доступные функции:

### removeDuplicates

Удаляет дубликаты из массива.

```js
const myArray = [1, 2, 3, 2, 4, 1];
const uniqueArray = arrayUtils.removeDuplicates(myArray);
console.log(uniqueArray); // Вывод: [1, 2, 3, 4]
```

### shuffleArray

Перемешивает элементы массива.

```js
const myArray = [1, 2, 3, 4, 5];
const shuffledArray = arrayUtils.shuffleArray(myArray);
console.log(shuffledArray); // Вывод: [3, 1, 5, 2, 4] (или любой другой случайный порядок)
```

### groupBy

Группирует элементы массива по указанному ключу.

```js
const people = [
  { name: 'Иван', age: 30, city: 'Москва' },
  { name: 'Мария', age: 25, city: 'Санкт-Петербург' },
  { name: 'Борис', age: 35, city: 'Москва' },
  { name: 'Алиса', age: 28, city: 'Санкт-Петербург' }
];

const groupedByCity = arrayUtils.groupBy(people, 'city');
console.log(groupedByCity);
/*
Вывод:
{
  'Москва': [
    { name: 'Иван', age: 30, city: 'Москва' },
    { name: 'Борис', age: 35, city: 'Москва' }
  ],
  'Санкт-Петербург': [
    { name: 'Мария', age: 25, city: 'Санкт-Петербург' },
    { name: 'Алиса', age: 28, city: 'Санкт-Петербург' }
  ]
}
*/
```

### filterBy

Фильтрует массив объектов по заданным критериям.

```js
const people = [
  { name: 'Иван', age: 30, city: 'Москва' },
  { name: 'Мария', age: 25, city: 'Санкт-Петербург' },
  { name: 'Борис', age: 35, city: 'Москва' },
  { name: 'Алиса', age: 28, city: 'Санкт-Петербург' }
];

const filteredPeople = arrayUtils.filterBy(people, { age: 30, city: 'Москва' });
console.log(filteredPeople);
// Вывод: [{ name: 'Иван', age: 30, city: 'Москва' }]
```

## Contribution

Если вы обнаружили проблемы или у вас есть предложения по улучшению, пожалуйста, создайте issue или отправьте pull request на [GitHub-репозитории](https://github.com/Ignasiya/array-utils).