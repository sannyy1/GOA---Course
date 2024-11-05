//  გააკეთეთ თითოეულ  მეთოდზე (.createElement, .appendChild(node), .insertBefore, .removeChild(node), .parentNode, .replaceChild) 5-5 მაგალითი.


// 1. document.createElement()

const div = document.createElement('div');
const p = document.createElement('p');
const h1 = document.createElement('h1');
const ul = document.createElement('ul');
const li = document.createElement('li');


// 2. element.appendChild(node)
const list = document.getElementById('myList');
list.appendChild(li);
const container = document.getElementById('container');
container.appendChild(div);
const body = document.body;
body.appendChild(h1);
const paragraph = document.createElement('p');
div.appendChild(paragraph);



// 3. parentNode.removeChild(node)
const itemToRemove = document.getElementById('item');
itemToRemove.parentNode.removeChild(itemToRemove);
const rowToRemove = document.getElementById('row');
rowToRemove.parentNode.removeChild(rowToRemove);


// 4. parentNode.replaceChild(newNode, oldNode)
const oldNode = document.getElementById('oldElement');
const newNode = document.createElement('footer');
oldNode.parentNode.replaceChild(newNode, oldNode);
const anotherOldNode = document.getElementById('oldParagraph');
const newParagraph = document.createElement('p');
anotherOldNode.parentNode.replaceChild(newParagraph, anotherOldNode);