# Версия с использованием CSS-фреймворка Tailwind

## Использованный метод и его основные особенности

В данном проекте используется метод стилизации с помощью CSS-фреймворка Tailwind. Основные особенности данного метода:

- **Утилитарный подход** — стили задаются с помощью классов прямо в разметке.
- **Гибкость и кастомизация** — возможность настройки через файл `tailwind.config.js`.
- **Оптимизация** — Tailwind удаляет неиспользуемые стили в продакшен-сборке, уменьшая размер CSS.
- **Совместимость** — поддержка современных CSS-функций, таких как Flexbox и Grid.
- **Быстрая разработка** — использование предопределенных классов ускоряет процесс стилизации.

## Инструкция: Запуск Проекта
**1. Проверьте, что у вас установлен Node и npm, для этого пропишите команды:**

**npm -v - Проверка модуля** <br>
**node -v - Проверка установленного Node** <br>

**2. Установите зависимости для проекта, прописав команду:**

```sh
npm install (альтернативный вариант npm i)
npm install -D tailwindcss
npx tailwindcss init -p
```

**5. Перейдите по ссылке, которую составил для вас проект. Для запуска выполните команду:**

```sh
npm run dev
```

**Перейти надо по этой ссылке, для этого зажмите [CTRL + клик]**<br>
![запуск проекта](https://i.imgur.com/DWQqPzd.png)

## Сценарии использования данного метода стилизации

1. **Использование утилитарных классов в компонентах**  
   ```jsx
   function Button({ text }) {
     return (
       <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
         {text}
       </button>
     );
   }
   export default Button;
   ```

2. **Создание кастомных классов в `@apply`**  
   В `src/index.css` можно определить свои стили:
   ```css
   .btn-primary {
     @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700;
   }
   ```
   Использование в компоненте:
   ```jsx
   function Button({ text }) {
     return <button className="btn-primary">{text}</button>;
   }
   export default Button;
   ```

3. **Работа с адаптивностью**  
   Tailwind поддерживает `sm`, `md`, `lg`, `xl` и `2xl` брейкпоинты:
   ```jsx
   function Card({ children }) {
     return (
       <div className="p-4 bg-gray-100 rounded shadow-md md:p-6 lg:p-8">
         {children}
       </div>
     );
   }
   export default Card;
   ```