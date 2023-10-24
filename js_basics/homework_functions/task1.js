// Завдання 1: Оголошення та виклик функції

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10) і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)


// Declaration
function rectangleArea(width, height) {

    const rectangleAreaResult = width * height;
    console.log(rectangleAreaResult);
    
}

rectangleArea(5, 10);

// Expression

const rectangleAreaExpress = function (width, height) {
    return width * height;
    
}

console.log(rectangleAreaExpress(5, 10));

//Arrow

const rectangleAreaArrow = (width, height) => width * height;

console.log(rectangleAreaArrow(5,10));

 