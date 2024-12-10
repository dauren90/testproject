console.log("JS Работает!!!")


let number = 6; 
if (number === 0) {
    number = 1; 
} else if (number < 0) {
    number = "less than zero"; 
} else {
    number *= 10; 
}

console.log(number);


// let userInput = prompt("Введите число:");
// let userNumber = Number(userInput); 
// let result = userNumber < 5 ? 0 : 1; 
// console.log(result);


// const num1 = +prompt("Введите первое число:");
// const num2 = +prompt("Введите второе число:");

// if (num1 > num2) {
//     console.log(`Большее число: ${num1}`);
// } else if (num2 > num1) {
//     console.log(`Большее число: ${num2}`);
// } else {
//     console.log("Числа равны");
// }


// const num1 = +prompt("Введите первое число:");
// const num2 = +prompt("Введите второе число:");


//  if (num1 % num2 === 0) {
//     console.log(`Число ${num1} кратно числу ${num2}.`);
// } else {
//     console.log(`Число ${num1} не кратно числу ${num2}.`);
// }


// const ball = +prompt("Введите средний балл (от 1 до 10):");


// if (ball >= 1 && ball <= 4) {
//     console.log("двоечник");
// } else if (ball >= 5 && ball <= 8) {
//     console.log("Неплохо");
// } else if (ball >= 9 && ball <= 10) {
//     console.log("Молодец");
// }



// const exam = +prompt("Введите балл за экзамен:");
// const project = +prompt("Введите количество выполненных проектов:");


// let result;

// if (exam > 90 || project> 10) {
//     result = 100;
// } else if (exam > 75 && project >= 5) {
//     result = 90;
// } else if (exam > 50 && project >= 2) {
//     result = 75;
// } else {
//     result = 0;
// }

// console.log(`Ваш балл: ${result}`);



const Rented = +prompt("Введите количество дней аренды автомобиля:");

const price = 40;

let sum = Rented * price;

if (Rented >= 7) {
    sum -= 50; 
} else if (Rented >= 3) {
    sum -= 20; 
}

console.log(`Общая стоимость аренды: $${sum}`);