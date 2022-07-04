'use strict'; // rodyti pagal nutylejima nutylimas klaidas
// var
// deklaruojam/ sukuriam paskelbiam kintamuosius su zodeliu let (const)
// let - skelbiam kad tai kintamasis
// num1 - pavadinimas;
// = - priskyrimo operatorius
// 6 - priskiriama verte
let num1 = 6;
num1 = 'labas';
let num2 = 10;
let sum = 'labas' + num2;
let minus = num1 - num2;
let multiply = num1 * num2;

// atspausdinti konsoleje
console.log(sum);

// Duomenu tipai

let num4 = 10; // skaicius
let num5 = 3.14; // skaicius
let num6 = -3.15; // skaicius

// string bet koks tekstas
let str1 = 'James'; // string
let str2 = 'Hello world'; // string
let str3 = '100'; // string

// Boolean - true | false; 1 | 0;
// specialus kintamasis kuris gali tureti tik 2 reiksmes

let isUserLoggedIn = false;
let isDarkModeOn = true;

// reiksmes nebuvimas
// undefined - neapibrezta reiksme, kai sukuriam kintamaji bet nepriskiriam reiksmes.
let string15; // undefined
console.log('string15 ===', string15);

// null - reiksmes nebuvimas
// panasi i undefined, kartais naudojama kad isvalyti kintamojo reiksme
let username = 'James';
username = null;
console.log('username: ', username);
