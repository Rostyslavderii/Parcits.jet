import { type } from "os";

let age: number;
let name: string;
let toggle: boolean;
let empty: null;
let noInitialize: undefined;
let callback: (a: number) => number;


age = 50;
name = 'Max';
toggle = true;
empty = null;
noInitialize = undefined;
callback = (a) => { return 100 + a };



let anything:any;
anything = -20;
anything = 'mac';
anything = {};


let some: unknown;
some = 'text';
let str: string;

if (typeof some === 'string') {
    str = some;
}

// tuple type. 
let tuple: [string, number];
tuple = ['max', 21];

tuple.push('push');
tuple.pop('');

// enum typeScript

enum status { LOADING, READY };
const page = { 
    load: status.LOADING
    
  

}

  if(page.load === status.LOADING) {
        console.log('page is loading')
    };
    
  if(page.load === status.READY) {
        console.log('page is ready')
    };
// union typeScript
let orStrOrNum: string | number; 

// literal typeScript

let literalType: 'enable' | 'disable';
literalType = 'enable';



function showMessage(message: string):void {
  console.log(message);
}


function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}


const data1: DataBase = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const data2: page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}


type DataBase = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date,
        updateAt: Date,
    }
}
