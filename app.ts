


function combin(param1: string | number, param2: string | number) {
    if (typeof param1 === 'string' || typeof param2 === 'string') {
    return param1.toString() + param2.toString();
        
    } else {
        return param1 + param2;
    }
}

console.log(combin('1','2'));

const fruits: string[] = [];

function work(arr: string[], value: string, bool: 'add' | 'delete') {
    if (bool === 'add') {
        arr.push(value);
    } else {
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


// const button = document.querySelector('button');
// const input1 = document.getElementById("num1")! as HTMLImputElement;
// const input2 = document.getElementById("num1")! as HTMLImputElement;   

// function add(num1: number, num2: number) {
//     return num1 + num2;
// };

// button.addEventListener("click", function() {
//     console.log(add(+input1.value, +input2.value))
// });

// let num: number;
// let str: string;
// let bool: boolean;
// let empty: null;
// let notParam: undefined;




// num = 10;
// str = 'Some string';
// bool = true;
// empty = null;
// notParam = undefined;


// function foo(num: number, str: 'some string', bool: true, empty: null, notParam: undefined) { 
//     // some logic

// }

// function f00(num = 20, str = "some string", bool = true, empty = null, notParams = undefined) {
    
// }

// let arrNumber: number[]; 

// let arrAny: any[];
// arrAny = [1, 'text'];

// let arrObj: { name: string }[];

// arrObj = [{ name: "Alex" }, { name: 1 }]; 

// const obj: object = {};
// const obj: {} = {};
// const obj: { name: string } = { name: 'Alex' };
// const obj: { name: string } = {};

// obj.name = 'alex';

// {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//     description: 'This is awesome product!'
//   }
// }

// const data: {
//     id: number,
//     price: number,
//     permission: string[],
//     details: {
//         title: string,
//         description?: string,
//     }
// } = {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//     description: 'This is awesome product!'
//   }
// }

// //ENUM

// enum Role { ADMIN, USER };

// const person = {
//     role: Role.ADMIN,
// }
// if (person.role === Role.ADMIN) {
//     console.log('Role:', Role.ADMIN);
// }


// // UNION TYPE
// let union: string | number; 

// union = 'some string' | 10;
// union = 'string';
// union = 10;


// function combine(union: string | number, union2: string | number,) {
//     return union + union2;
// }

// function combine2(param1: string | number, param2: string | number) {
//     if (typeof param1 === 'string' && typeof param2 === 'string') {
//          return param1.toString() + param2.toString();
        
//     } else {
//         return param1 + param2;
//     }
// }

// //LITERAL TYPE

// Let literl: "first" | 'second';

// literal = 'first' && ' second';

// // write the function witch either greets the visitor or says goodbye.


// function greeting(action: 'Hello' | ' GoodBye') {
    
//     if (action === 'hello') {
//         return console.log('Hello User!');
//     } else {
//         return console.log('Bye user!');
//     }
// }

// function greeting(Hello: string, Bye: string) {
//     if (typeof Hello === 'string') {
//         return console.log('Hello');
//     } else if (typeof Bye === 'string') {
//         return console.log('bye user');
//     }
// }
// // Return Type

// function retyrnType(num: number, num2: number): number {
//     return num;
// }

// // Void 
// // this function cannot make visible return
// function print(): void {
//     console.log('Print some text');
// }

// // Never 
// function generateError(message: string, status: number): never {
//     throw { message, status };
// }

// generateError('An error', 500);
// // function Type

// let callback: (num: number) => void 

// callback = (num) => {
//     console.log(num);
// }

// callback(10);

// function calc(param1: number, param2: number, callback: (num1: number, num2: number) => number): void {
//     console.log('Result', callback(param1, param2));
// }

// calc(1, 1, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);

//Custom Types

type DataBase = {
     id: number;
  price: number;
  permission: string[];
  details: {
    title: string;
    description?: string;
  }
}

const DataBase: DataBase = {
    id: 1,
  price: 10.99,
  permission: ['read', 'write'],
  details: {
    title: 'New product',
    description: 'This is awesome product!'
  }
}

export type {
    DataBase,
};
 
  
// const some = 'str';


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