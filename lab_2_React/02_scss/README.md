# Версия с использованием SCSS

## Использованный метод и его основные особенности

В данном проекте используется метод стилизации с помощью SCSS (Sass). Основные особенности данного метода:

- Поддержка вложенности, что упрощает структуру стилей.
- Использование переменных (`$color-primary: blue;`), упрощающих изменение цветовой схемы.
- Миксины и наследование, позволяющие переиспользовать код (`@mixin flex-center { display: flex; justify-content: center; align-items: center; }`).
- Импорт отдельных файлов SCSS, что улучшает модульность (`@import 'variables';`).
- Поддержка вложенных селекторов (`.card { &__title { font-size: 20px; } }`).

## Инструкция: Запуск Проекта
**1. Проверьте, что у вас установлен Node и npm, для этого пропишите команды:**

**`npm -v` - Проверка модуля** <br>
**`node -v` - Проверка установленного Node** <br>

**2. Установите зависимости для проекта, прописав команду:**

`npm install` (альтернативный вариант `npm i`)<br>
`npm i -g sass` - для уставновки SCSS

**3. Перейдите по ссылке, которую составил для вас проект. Для запуска выполните команду:**

`npm run dev`

**Перейти надо по этой ссылке, для этого зажмите [CTRL + клик]**<br>
![запуск проекта](https://i.imgur.com/DWQqPzd.png)

## Сценарии использования данного метода стилизации

1. **Использование переменных**  
   В файле `src/styles/variables.scss` можно определить глобальные переменные:
   ```scss
   $primary-color: #3498db;
   $secondary-color: #2ecc71;
   $font-stack: Arial, sans-serif;
   ```

2. **Использование миксинов**  
   В `src/styles/mixins.scss` можно создать повторно используемые фрагменты кода:
   ```scss
   @mixin flex-center {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   ```
   Использование в компоненте:
   ```scss
   .container {
     @include flex-center;
   }
   ```

3. **Импорт и модульность**  
   В файле `src/styles/main.scss` можно импортировать другие SCSS-файлы:
   ```scss
   @import 'variables';
   @import 'mixins';
   ```

4. **Локальные стили для компонентов**  
   - `src/components/Button.module.scss`:
     ```scss
     .btn {
       background-color: $primary-color;
       color: white;
       padding: 10px 20px;
       border: none;
       border-radius: 5px;
       cursor: pointer;
     }
     ```
   - `src/components/Button.jsx`:
     ```jsx
     import styles from './Button.module.scss';
     
     function Button({ text }) {
       return <button className={styles.btn}>{text}</button>;
     }
     
     export default Button;
     ```s