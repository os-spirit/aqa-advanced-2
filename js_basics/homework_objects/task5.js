// Завдання 5: Перебір властивостей об'єкта
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    {name: "Gena", email: "test1@gmail.com", age: 19},
    {name: "Gepa", email: "test2@gmail.com", age: 17},
    {name: "Georg", email: "test3@gmail.com", age: 55},
];


for (const user of users) {

    const { name, email, age } = user;

    console.log(`Name: ${name} Email: ${email} Age: ${age}`);
    console.log("- - - - - - - - - - - -");

}



// console.log(users);