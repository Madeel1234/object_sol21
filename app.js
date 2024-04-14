#! /usr/bin/env node
// Solution # 21
// They think of something you could store in a typescript object. write a program that creates object containing these items.
// Creates two objects
let book = {
    name: 'Essential typescript',
    price: 450
};
let apple = {
    name: 'apple',
    price: 200
};
console.log(`book name: ${book.name},price: $${book.price}`);
console.log(`apple name: ${apple.name},price: $${apple.price}`);
export {};
