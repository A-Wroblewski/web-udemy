// let user_name;

// user_name = prompt('Digite seu nome');

// alert('Olá! ' + user_name);

// let user_x;
// let user_y;

// user_x = parseFloat(prompt('Digite um número'));
// user_y = parseFloat(prompt('Digite outro número'));

// alert(user_x + user_y);
// alert(user_x - user_y);
// alert(user_x * user_y);
// alert(user_x / user_y);
// alert(user_x % user_y);

// let numbers;

// numbers = [
//     parseFloat(prompt()), parseFloat(prompt()), parseFloat(prompt()),
// ];

// alert(numbers[0]);
// alert(numbers[1]);
// alert(numbers[2]);
// alert((numbers[0] + numbers[1] + numbers[2]) / numbers.length);

// let ba = 'Ba';

// console.log((ba + parseInt(ba) + 'a').toLowerCase());

// if (isNaN(user_x) || isNaN(user_y)) {
//     alert('Você não digitou um número.');
// } else {
//     if (user_x > user_y) {
//         alert(
//             `X = ${user_x}, Y = ${user_y} | x é maior que y`
//         );
//     } else if (user_x < user_y) {
//         alert(
//             `X = ${user_x}, Y = ${user_y} | x é menor que y`
//         );
//     } else {
//         alert(
//             `X = ${user_x}, Y = ${user_y} | ambos são iguais`
//         );
//     }
// }

// let userNumber1;
// userNumber1 = 2;

// switch (userNumber1) {
//     case 1:
//         console.log('é 1');
//         break;
//     case 2:
//         console.log('é 2');
//         break;
//     default:
//         console.log('não é 1 nem 2');
//         break;
// }

// switch (typeof 5) {
//     case 'number':
//         console.log('num');
//         break;
//     default:
//         console.log('def');
//         break;
// }

// let n = 3;
// let i = 0;

// while (i <= 1000) {
//     console.log(n * i);
//     i++;
// }

// console.log('\nfim do while\n');

// for (let i = 0; i <= 1000; i+=2) {
//     console.log(n * i);
// }

// let isSame = false;
// let x1;
// let y;
// let tries1 = 0;

// while (!isSame) {
//     x1 = Math.floor(Math.random() * 6) + 1;
//     y = Math.floor(Math.random() * 6) + 1;
//     console.log(x1, y);
//     tries1++;

//     if (x1 == y) {
//         isSame = true;
//     }
// }
// console.log(tries1);

// let number = 15;

// for (let i=2; i<=number; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let userNumber = parseInt(prompt('numero'));

// for (let i=0; i<=1000; i++) {
//     document.write(i * userNumber);

//     if (i % 10 == 0) {
//         document.write('<hr>');
//     }
// }

// for (let i=0; i<=100; i++) {
//     if (i == 2 || i == 3 || i == 5) {
//         console.log('continue');
//         continue;
//     }

//     console.log(i);

//     if (i == 7) {
//         console.log('break');
//         break;
//     }
// }

// let tries = 0;
// let evenTries = 0;

// while (true) {
//     tries++;
//     console.log(`tries -> ${tries}`);

//     let randX = Math.floor(Math.random() * 6) + 1;
//     let randY = Math.floor(Math.random() * 6) + 1;

//     console.log(`randX -> ${randX}`);
//     console.log(`randY -> ${randY}`);

//     if ((randX + randY) % 2 == 0) {
//         evenTries++;
//         console.log(`evenTries -> ${evenTries}`);

//         if (evenTries == 10) {
//             break;
//         }
//     }
// }
// console.log(`total tries -> ${tries}`);

// for (let i=0; i<=2104; i++) {
//     if (i % 400 == 0 || (i % 4 == 0 && i % 100 != 0)) {
//         console.log(`is leap -> ${i}`);
//     }
// }

// let list1 = [];

// list1.push('bunda', 1, true, [1, 2, 7]);
// console.log(list1);
// list1.reverse();
// console.log(list1);

// for (let i=0; i<list1.length; i++) {
//     console.log(list1[i]);
// }

// let x3 = prompt('coisa');

// list1.push(x3);
// console.log(list1);

// list1.push(1, 2, 3, 4, 5);

// let list2 = [];

// for (let i = 1; i < list1.length + 1; i++) {
//     list2.push(i * 2);
// }

// console.log(list1);
// console.log(list2);

// let x4 = new Date();
// let weekDay = x4.getDay() + 1;

// switch (weekDay) {
//     case 1:
//         console.log('Domingo');
//         break;
//     case 2:
//         console.log('Segunda-feira');
//         break;
//     case 3:
//         console.log('Terça-feira');
//         break;
//     case 4:
//         console.log('Quarta-feira');
//         break;
//     case 5:
//         console.log('Quinta-feira');
//         break;
//     case 6:
//         console.log('Sexta-feira');
//         break;
//     case 7:
//         console.log('Sábado');
//         break;
// }

// let x2 = [[], 1, '2', 3, 'banana', '4', 5, 6, 7, 8, 9, true, 10];
// let sum2 = 0;
// let xLength = x2.length;

// for (let i = 0; i < xLength; i++) {
//     let currentValue = x2[i];

//     currentValue = parseInt(x2[i]);

//     if (isNaN(currentValue)) {
//         continue;
//     }
//     sum2 += currentValue;
// }
// console.log(sum2);

// let pencil = {};

// console.log(pencil);
// pencil.color = 'red';
// pencil.price = 4.50;
// pencil.isNew = true;
// pencil['banana'] = 'banana';
// console.log(pencil);
// console.log(pencil.color);
// console.log(pencil.isNew);

// let person = {
//     name: 'person name',
//     surname: 'person surname',
// };
// let address = {
//     street: 'random street',
//     number: 123,
// };

// console.log(person, address);
// person['address'] = address;
// console.log(person);
// console.log(person.address.number);

// for (let key in person) {
//     console.log(key);
//     console.log(person[key]);
// }

// let sum = 0;
// let list = [1, 2, 3, 4, 5];

// for (let number in list) {
//     console.log(list[number]);
//     sum += list[number];
//     console.log(sum);
// }

// let person1,  person2, person3, person4, person5;

// let peopleInfo = [
//     person1 = {
//         name: 'name1',
//         email: 'email1',
//     },
//     person2 = {
//         name: 'name2',
//         email: 'email2',
//     },
//     person3 = {
//         name: 'name3',
//         email: 'email3',
//     },
//     person4 = {
//         name: 'name4',
//         email: 'email4',
//     },
//     person5 = {
//         name: 'name5',
//         email: 'email5',
//     },
// ];

// let ulList = document.getElementById('list');

// for (let i = 0; i < peopleInfo.length; i++) {
//         ulList.innerHTML += `<li>${peopleInfo[i]['name']}:
//         ${peopleInfo[i]['email']}</li>`;
//     }

// let product1,  product2, product3;

// let productsInfo = [
//     product1 = {
//         name: 'product1',
//         price: 5,
//         quantity: 33,
//     },
//     product2 = {
//         name: 'product2',
//         price: 10,
//         quantity: 69,
//     },
//     product3 = {
//         name: 'product3',
//         price: 15,
//         quantity: 1,
//     },
// ];

// let table = document.getElementById('table');

// for (let i = 0; i < productsInfo.length; i++) {
//         table.innerHTML += `<tr>
//             <td>${productsInfo[i].name}</td>
//             <td>${productsInfo[i].price}</td>
//             <td>${productsInfo[i].quantity}</td>
//         </tr>`;
//     }

// let students = [
//     {
//         name: 'Daniel',
//         grades: [1, 3, 3, 8,],
//     },
//     {
//         name: 'Maria',
//         grades: [10, 7, 9, 8,],
//     },
//     {
//         name: 'João',
//         grades: [10, 6, 3, 0,],
//     },
// ];

// let studentsHTML = document.getElementById('students-list');

// for (let objectIndex = 0; objectIndex < students.length; objectIndex++) {
//     let mean = 0;
//     let studentObject = students[objectIndex];
//     let studentGrades = studentObject.grades;

//     for (let gradeIndex = 0; gradeIndex < studentGrades.length; gradeIndex++) {
//         mean += studentGrades[gradeIndex];
//     }
//     mean /= studentGrades.length;

//     studentsHTML.innerHTML += `<li>Aluno: ${studentObject.name}, média: ${mean}</li>`;
// }

// function getDiv() {
//     return document.getElementById('timesTable');
// }

// function clearTimesTable() {
//     let div = getDiv();
//     div.innerHTML = '';
// }

// function showTimesTable() {
//     clearTimesTable();

//     let inputNumber = document.getElementById('input').value;
//     let div = getDiv();

//     for (let i = 1; i <= 100; i++) {
//         div.innerHTML += `<p>${inputNumber} X ${i} = ${inputNumber * i}</p>`;
//     }
// }

// function calculateRectangleArea(base, height) {
//     console.log(arguments);

//     if (typeof base !== 'number' || typeof height !== 'number') {
//         throw Error('Essa função aceita somente números.');
//     }
//     return base * height;
// }

// try {
//     console.log(calculateRectangleArea('2', 4));
// } catch (error) {
//     console.log(error.message);
// }

// let product5 = {
//     name: 'Pencil',
//     quantity: 10,
//     buy: function (x) {
//         if (x > this.quantity) {
//             throw Error('Não há estoque para essa quantidade.');
//         } else {
//             this.quantity -= x;
//         }
//     }
// };

// console.log(product5);
// try {
//     console.log(product5.buy(9));
// } catch (error) {
//     console.log(error.message);
// }
// console.log(product5);

// function calculateMean() {
//     let argumentsQuantity = arguments.length;

//     if (argumentsQuantity == 0) {
//         return 0;
//     }
//     let sum = 0;

//     for (let i = 0; i < argumentsQuantity; i++) {
//         if (typeof arguments[i] !== 'number') {
//             throw Error('Passe somente números.');
//         }
//         sum += arguments[i];
//     }
//     return sum / argumentsQuantity;
// }

// console.log(calculateMean(2, 3, 4));
