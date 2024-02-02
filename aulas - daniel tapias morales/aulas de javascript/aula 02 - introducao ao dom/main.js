let title = document.getElementById('title');
let paragraph = document.getElementById('paragraph');

console.log(title);
console.log(title.textContent);
console.log(paragraph);
console.log(paragraph.textContent);

let input = document.getElementById('input');

console.log(input);
console.log(input.value);

paragraph.textContent = 'meu <b><i>novo</i></b> parágrafo.';
paragraph.innerHTML = 'meu <b><i>novo</i></b> parágrafo.';

console.log(paragraph);
console.log(paragraph.textContent);
console.log(paragraph.innerHTML);

let list = document.getElementById('list');
let newFruit = '<li>Durião</li>';

list.innerHTML += newFruit;
