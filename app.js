"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function combin(param1, param2) {
    if (typeof param1 === 'string' || typeof param2 === 'string') {
        return param1.toString() + param2.toString();
    }
    else {
        return param1 + param2;
    }
}
console.log(combin('1', '2'));
const fruits = [];
function work(arr, value, bool) {
    if (bool === 'add') {
        arr.push(value);
    }
    else {
        const index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
}
work(fruits, 'redd apple', 'add');
work(fruits, 'redd apple', 'add');
work(fruits, 'redd apple', 'add');
work(fruits, 'redd apple', 'add');
work(fruits, 'redd apple', 'delete');
console.log(fruits);
const dat1a = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: 'New product',
        description: 'This is awesome product!'
    }
};
// // Optional function()
// function optional(num?: number): void {
// } 
// optional();
// type CustomType = {
//   name: string;
//   sex?: 'man' | 'woman';
// }
// const person: CustomType = {
//   name: 'Don',
// }
// person.sex = 'man';
// let bool: boolean;
// bool = true;
// bool = 1;  // not right!
// let arr = []; // mssive can be any type of data!!
// arr = [1, 'sting'];
// let arrNumer: number[] = [];
// arr = [1, 'sting'];
// let arrAny: any{} = {};
// arrAny = [ 1, {}, 'sting'];
