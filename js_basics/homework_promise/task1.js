// Завдання 1

// Напишіть асинхронну функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент.

// Функція повинна виводити переданий текст через передану кількість мілісекунд.

async function outputInformationByDelay(text, delayMs){

    setTimeout(()=> console.log(text), delayMs);
  
}
outputInformationByDelay("Some text that you will see after Delay!", 5_000);
