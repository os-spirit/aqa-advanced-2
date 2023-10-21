// Завдання 3: Генерація таблиці множення

// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .

// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.

const number = 5;

for (let i = 1; i <= 10; i++){
    
    let result = `${number} x ${i} = ${number * i}`
    
    console.log(result)
}

console.log("=============================== loop WHILE started ========================");

let startingPoint = 0;

while (startingPoint <= 9){

    startingPoint++

    let result = `${number} x ${startingPoint} = ${number * startingPoint}`

    console.log(result)
    
}