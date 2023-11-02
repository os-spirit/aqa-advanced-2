import Book from './ts1_class_book.js';
import EBook from './ts2_class_ebook.js';


const harryPotterBook = new Book("Harry Potter", "J.K. Rouling", 2000);
const harryPotterBookPart2 = new Book("Harry Potter2", "J.K. Rouling", 2001);
const harryPotterBookPart3 = new Book("Harry Potter3", "J.K. Rouling", 2004);
const harryPotterBookPart4 = new EBook("Harry Potter4", "J.K. Rouling", 2010, "PDF");



harryPotterBook.printInfo();
console.log('- - - - - - - - - -');
harryPotterBookPart2.printInfo();
console.log('- - - - - - - - - -');
harryPotterBookPart3.printInfo();
console.log('- - - - - - - - - -');
harryPotterBookPart4.printInfo();


console.log('- - - - - - - - - -');
console.log(" Validation checks!");
console.log('- - - - - - - - - -');


harryPotterBookPart4.fileFormat = 222;
harryPotterBookPart2.title = 12121;
harryPotterBookPart4.author = 1212;
harryPotterBookPart4.year = " 123213";


console.log("- - - - - - - - - -");
const ebook = EBook.fromBook(harryPotterBookPart2, 'PDF');
console.log(ebook)

console.log("- - - - - - - - - -");
const findOldestBook = Book.findOldestBook([harryPotterBook, harryPotterBookPart2, harryPotterBookPart3, harryPotterBookPart4]);
console.log(findOldestBook);