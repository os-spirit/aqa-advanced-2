// Завдання 4: Обробка помилок за допомогою try-catch-finally

// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator та повернути результат.
// У разі помилки ділення, якщо denominator дорівнює 0 або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть виклик функції в блок try
// Створіть блок catch в якому виведіть повідомлення про помилку в консоль.
// Використовуючи блок finally, завершіть функцію, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.


function divide(numerator, denominator) {
   
    if (typeof numerator !== 'number') {
        throw new Error('Помилка: numerator має бути числом.');
      }
    if ( typeof denominator !== 'number'){
        throw new Error('Помилка: denominator має бути числом.');
      }
    if (denominator === 0) {
        throw new Error('Помилка: denominator не може дорівнювати 0.');
      }
      const result = numerator / denominator;
      return result;
    
  }

try {
    console.log(divide(10, 2));
    console.log(divide(5, 0)); 
    console.log(divide('не число', 3));
    
} catch (error) {
      console.error(error.message);
      } finally {
      console.log('Робота завершена');
    }

  
 






  
  
  
  