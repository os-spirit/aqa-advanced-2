// Завдання 2

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом 
// https://jsonplaceholder.typicode.com/todos/1
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// https://jsonplaceholder.typicode.com/users/1
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних

function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=> response.json());
  }
  
  async function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response)=> response.json());
  }

  Promise.all([fetchTodo(), fetchUser()]).then((values) => console.log(values));
  Promise.race([fetchTodo(), fetchUser()]).then((values) => console.log(values));
