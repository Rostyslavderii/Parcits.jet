"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age;
let name;
let toggle;
let empty;
let noInitialize;
let callback;
age = 50;
name = 'Max';
toggle = true;
empty = null;
noInitialize = undefined;
callback = (a) => { return 100 + a; };
let anything;
anything = -20;
anything = 'mac';
anything = {};
let some;
some = 'text';
let str;
if (typeof some === 'string') {
    str = some;
}
// tuple type. 
let tuple;
tuple = ['max', 21];
tuple.push('push');
tuple.pop('');
// enum typeScript
var status;
(function (status) {
    status[status["LOADING"] = 0] = "LOADING";
    status[status["READY"] = 1] = "READY";
})(status || (status = {}));
;
const page = {
    load: status.LOADING
};
if (page.load === status.LOADING) {
    console.log('page is loading');
}
;
if (page.load === status.READY) {
    console.log('page is ready');
}
;
// union typeScript
let orStrOrNum;
// literal typeScript
let literalType;
literalType = 'enable';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const data1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
};
const data2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
