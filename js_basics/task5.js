// Завдання 5*: Обчислення площі та об'єму

// Це завдання має 3 частини. Можна виконати все в одному файлі або створити окремий файл для кожної частини

// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа

// 5-1 Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

const radius = 15

const circleArea = Math.PI * Math.pow(radius, 2)

console.log(circleArea)

// 5-2

// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

const length = 10

const width = 7

const rectangleArea = length * width

console.log(rectangleArea)

// 5-3

// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

const height = 15

const cylinderVol = (Math.PI * Math.pow(radius, 2)) * height

console.log(cylinderVol.toFixed(2))
