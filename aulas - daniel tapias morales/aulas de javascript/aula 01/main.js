let user_name;

user_name = prompt('Digite seu nome');

alert('Olá! ' + user_name);

let user_x;
let user_y;

user_x = parseFloat(prompt('Digite um número'));
user_y = parseFloat(prompt('Digite outro número'));

alert(user_x + user_y);
alert(user_x - user_y);
alert(user_x * user_y);
alert(user_x / user_y);
alert(user_x % user_y);

let numbers;

numbers = [
    parseFloat(prompt()), parseFloat(prompt()), parseFloat(prompt()),
];

alert(numbers[0]);
alert(numbers[1]);
alert(numbers[2]);
alert((numbers[0] + numbers[1] + numbers[2]) / numbers.length);

let ba = 'Ba';

console.log((ba + parseInt(ba) + 'a').toLowerCase());
