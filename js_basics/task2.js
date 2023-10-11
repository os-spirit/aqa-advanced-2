// Завдання 2: Встановлення залежностей та їх використання

// Встновіть нову залежність до вашого проекту - chalk (npmjs.com/package/chalk?activeTab=readme). Використайте її для виведення в консоль довільного кольорового тексту. На сайті npm ви можете не лише скопіювати команду для встановлення але й побачити як користуватися цією бібліотекою.

import chalk from "chalk";

const chalkTest = "Hello!"

console.log(chalk.blue(chalkTest));

console.log(chalk.blue.bgRed.bold(chalkTest));

console.log(chalk.underline.bgBlue(chalkTest));

console.log(chalk.underline.bgBlue(chalkTest + " " + "It's last test for this library"));