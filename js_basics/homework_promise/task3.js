// /Завдання 3

// Виконайте завдання 2 але використовуючи конструкцію async/await

async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
  }
  
  async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
  }
  
  Promise.all([fetchTodo(), fetchUser()]).then((values) => console.log(values));
  Promise.race([fetchTodo(), fetchUser()]).then((values) => console.log(values));

