// Завдання 1: Оголошення та виклик функції

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10) і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// Declaration
function calculateRectangleArea (width, height) {
  const rectangleAreaResult = width * height
  return rectangleAreaResult
}

console.log(calculateRectangleArea(5, 10))

// Expression

const calculateRectangleAreaExpress = function (width, height) {
  return width * height
}

console.log(calculateRectangleAreaExpress(5, 10))

// Arrow

const calculateRectangleAreaArrow = (width, height) => width * height

console.log(calculateRectangleAreaArrow(5, 10))
