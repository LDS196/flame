## :seedling: <a href="https://flame-brown.vercel.app/" target="_blank">Flame</a>  https://flame-brown.vercel.app/
## Технологии

![Vue3](https://img.shields.io/badge/-Vue3-61daf8?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-blue)
![Vuex](https://img.shields.io/badge/-Vuex-pink)
![Vue-router](https://img.shields.io/badge/-Vue-router-61daf8?logo=react&logoColor=blue)
![HTML5](https://img.shields.io/badge/-HTML5-e34f26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/-CSS3-1572b6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-f7df1e?logo=javaScript&logoColor=black)
![VITE](https://img.shields.io/badge/-Vite-99d6f8?logo=webpack&logoColor=black)

Statemanager: **Vuex**

Routing: **Vue router**

Saving application data: **Vuex Persist**

UI/style: **CSS**


Clone repositories:

```
git clone https://github.com/LDS196/flame.git
```

Install dependencies:

```
npm install
```

Start project:

```
npm run serve
```

FRONTEND Разработчик 

тестовое задание 

Flame Тестовое фронт 1
Flame Тестовое фронт
Используемые технологии: Vue3, Vue Router, Mobx/Vuex,
TypeScript
1 часть
Настроить окружение
Создать роутинг
/
/peoples
/peoples/:id
/favorites
2 часть
Главная страница “/” состоит из навигации(2 гиперссылки на /peoples, favorites)
Страница /peoples
таблица из всех персонажей из https://swapi.dev/api/people
пример таблицы:
name height mass hair_color
Add
Favorite/Remove
favorite
Luke Skywalker 172 77 blond
Кнопка
добавить/
удалить из
избранных
отображать следующее name, height, mass, hair_color
кнопка добавить/удалить в/из избранное
Flame Тестовое фронт 2
добавить/удалить в/из localStorage, стора нового персонажа. ВАЖНО -
можно добавлять несколько персонажей
Инпут с выпадающим поиском(пример на скрине). Отображать name из API
Поиск осуществляется посредством API
https://swapi.dev/api/people/?search=r2
где r2 - введенный текст
В выпадающем списке отображать гиперссылки на следующую страницу
/peoples/:id
id получаем из жсона(пример: 1) "url": " https://swapi.dev/api/people/1/ "
на странице /people/:id отобразить в таблице все данные о текущем персонаже
кнопка add/remove favorite(отсутствует, если он уже есть в favorite)
добавить/удалить в/из localStorage, стора нового персонажа. ВАЖНО -
можно добавлять несколько персонажей
Flame Тестовое фронт 3
3 часть
страница /favorites
таблица с данными о каждом персонаже, записанном в localStorage
удалить персонажа из избранных
пример таблицы:
name height mass hair_color Delete
Luke Skywalker 172 77 blond
Кнопка удалить из
избранных
