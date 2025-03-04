# Версия с использованием CSS-in-JS

## Использованный метод и его основные особенности

В данном проекте используется метод стилизации с помощью CSS-in-JS. Основные особенности данного метода:

- Стили описываются внутри JavaScript-кода, что упрощает их управление.
- Динамическое создание стилей с использованием пропсов и состояний.
- Автоматическая изоляция стилей, предотвращающая конфликты имен классов.
- Возможность использования различных библиотек, таких как `styled-components`.
- Улучшенная работа с темизацией и переиспользованием стилей.

## Инструкция: Запуск Проекта
**1. Проверьте, что у вас установлен Node и npm, для этого пропишите команды:**

**npm -v - Проверка модуля** <br>
**node -v - Проверка установленного Node** <br>

**2. Установите зависимости для проекта, прописав команду:**

`npm install (альтернативный вариант npm i)`<br>
`npm install styled-components`

**3. Перейдите по ссылке, которую составил для вас проект. Для запуска выполните команду:**

npm run dev

**Перейти надо по этой ссылке, для этого зажмите [CTRL + клик]**<br>
![запуск проекта](https://i.imgur.com/DWQqPzd.png)

## Сценарии использования данного метода стилизации

1. **Использование `styled-components`**  
   Установка библиотеки:
   ```sh
   npm install styled-components
   ```
   Пример использования:
   ```jsx
   import styled from 'styled-components';
   
   const Button = styled.button`
     background-color: #3498db;
     color: white;
     padding: 10px 20px;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     transition: background-color 0.3s;
     
     &:hover {
       background-color: #2980b9;
     }
   `;
   
   function App() {
     return <Button>Нажми меня</Button>;
   }
   
   export default App;
   ```

2. **Динамическое изменение стилей с пропсами**  
   ```jsx
   import styled from 'styled-components';
   
   const Button = styled.button`
     background-color: ${(props) => (props.primary ? '#2ecc71' : '#e74c3c')};
     color: white;
     padding: 10px 20px;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     transition: background-color 0.3s;
     
     &:hover {
       background-color: ${(props) => (props.primary ? '#27ae60' : '#c0392b')};
     }
   `;
   
   function App() {
     return (
       <>
         <Button primary>Primary Button</Button>
         <Button>Secondary Button</Button>
       </>
     );
   }
   
   export default App;
   ```