// Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case

const averageGrade = 1; 

switch (true){
    case averageGrade <=59:
        console.log("Незадовільно");
        break 
        
    case averageGrade <=70:
        console.log("Задовільно"); 
        break 
    
    case averageGrade <=80:
        console.log("Добре");
        break
    
    case averageGrade <= 90:
        console.log("Дуже добре");
        break
    
    case averageGrade <= 100:
        console.log("Відмінно");
        break    
}
