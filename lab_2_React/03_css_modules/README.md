# Версия с использованием CSS-модулей

## Использованный метод и его основные особенности

В данном проекте используется метод стилизации с помощью CSS-модулей. Основные особенности данного метода:

- Локальная область видимости стилей, предотвращающая конфликты классов.
- Импорт стилей как JavaScript-объектов, что позволяет использовать классы программно.
- Возможность динамической подстановки классов с использованием библиотек, таких как `classnames`.
- Поддержка вложенных селекторов и псевдоклассов (`:hover`, `:focus` и т. д.).

## Инструкция: Запуск Проекта
**1. Проверьте, что у вас установлен Node и npm, для этого пропишите команды:**

**`npm -v` - Проверка модуля** <br>
**`node -v` - Проверка установленного Node** <br>

**2. Установите зависимости для проекта, прописав команду:**

`npm install` (альтернативный вариант `npm i`)

**3. Перейдите по ссылке, которую составил для вас проект. Для запуска выполните команду:**

`npm run dev`

**Перейти надо по этой ссылке, для этого зажмите [CTRL + клик]**<br>
![запуск проекта](https://i.imgur.com/DWQqPzd.png)

## Сценарии использования данного метода стилизации

1. **Создание CSS-модуля**  
   В файле `src/components/Button.module.css` можно определить локальные стили:
   ```css
   .btn {
     background-color: #3498db;
     color: white;
     padding: 10px 20px;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     transition: background-color 0.3s;
   }
   
   .btn:hover {
     background-color: #2980b9;
   }
   ```

2. **Использование CSS-модуля в компоненте**  
   В файле `src/components/Button.jsx`:
   ```jsx
   import styles from './Button.module.css';
   import classNames from 'classnames';
   
   function Button({ text, className }) {
     return <button className={classNames(styles.btn, className)}>{text}</button>;
   }
   
   export default Button;
   ```

3. **Динамическое добавление классов**  
   В файле `src/components/Card.module.css`:
   ```css
   .card {
     padding: 20px;
     border-radius: 10px;
     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   }
   
   .primary {
     background-color: #f1c40f;
   }
   
   .secondary {
     background-color: #2ecc71;
   }
   ```
   В файле `src/components/Card.jsx`:
   ```jsx
   import styles from './Card.module.css';
   import classNames from 'classnames';
   
   function Card({ type, children }) {
     return <div className={classNames(styles.card, styles[type])}>{children}</div>;
   }
   
   export default Card;
   ```