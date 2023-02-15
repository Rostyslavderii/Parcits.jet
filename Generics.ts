interface IPerson {
  name: string;
  age: number;
}

function createPerson (name: string): IPerson {
  const person: Partial<IPerson> = {};

  person.name = name;
  person.age = 21;

  return person as IPerson;
}


const arr1: Readonly<string[]> = ['One', 'Two', 'Three'];

type Environment = {
  temperature: number;
}

const arr: Readonly<Environment> = {
  temperature: 27,
};

interface Page {
  title: string;
  annotation: string;
  numberPage: number;
}

// const pageAnnotation: Pick<Page, 'annotation' | 'numberPage'> = {
//   annotation: 'Small page',
//   numberPage: 1,
// };


interface Person {
  name: string;
  additionInfo?: {
    someInfo: string;
  }
}

const user: Person = {
  name: 'Alex'
}

console.log(user?.additionInfo?.someInfo);


const userInput = '';

const store = userInput ?? 'DEFAULT';

console.log(store);


type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}



interface Admin = {
    name: string;
    privileges: string[];
};

interface user = {
    name: string;
    startDate: Date;
};


type adminUser = Admin & user;

interface AdminIser extends Admin, user { };

type AdminOrUser = Admin | user;


//type Guards.
 

type ComplexType = string | number;
function fff(a: ComlexType, b: complexType) {
    if (typeof a === 'string' || typeof b === 'string')  // ТупеГуард проверяем тип перед его использованием.
    {
        return a.toString() + b.toString();
    }
    return a + b;
}

type AdminUser = Admin | user;


function showFields(elem: AdminOrUser) {
   // console.log(elem.startDate);
    if ('startDate' in elem) {
        console.log(elem.startDate);
    } else if ('privileges' in elem) {
        console.log(elem.privileges)
 }
}

abstract class guy {
    constructor(public name: string) {
        
    }
}

class boy extends guy {
    advice () {
    console.log('advice');
}
}

class GoodBoy extends guy { 
    insult () {
    console.log('insult');
    }
} 


const good = new GoodBoy('Djon');
const boy1 = new boy('Sergey');


function guys(user: guy) {
    if (user instanceof GoodBoy) {
        user.advice();
    }
    if (user instanceof boy) {
        user.insult();
    }

}

// TYPE CASTING

const input = document.getElementById('inputEmail');
input?.noderValue; 

input.value; 
const input = <HTMLInputElement>document.getElementById('inputEmail')! as HTMLInputElement;

if (input) {
    (input as HTMLInputElement).value
    const input = input as HTMLElement;

}

// INDEX PROPERTIEC

interface Persony  {
    name: string;
    [someProp: string]: string | number;
    age: number;
}

const user6: Persony = {
    name: 'Max',
    gender: 'Man',
    county: 'Ukraine',
    age: 30,
}

//Optional Chaining

interface Personal {
    name: string;
}

const users: Personal = {
    name: "max";
}


// if (user.additionInfo) {
//     user.additionInfo.someInfo
// }


user?.additionInfo?.someInfo

//nullish Coalescing

const userImput = '';

const store = userInput ?? 'Default';

console.timeLog(store);
  

//function overloads - перегрузка операторов

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string | number, b: string | number) {

    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;

}
    
    
//Generics - обобщенный тип.


let arr: any[];
let arr: number[] | string[];

arr = ['string',  1, null, true]


let arr: Array<string | number>;

const promise = new Promise(resolve) => {
    resolve:'string';

}

promise.then((data) => {

});

async () => {
    async function promises() {
        return ' string2';

        promisefoo()
            .then(data => {
            
            });
   }
} await()

//Generic
function merge<T extends Object, U>(ObjA: T, ObjB: U) {
    return Object.assign( objA, objB);
} 
    const toMerge1 = {
        name:'Max',
    } c

    const toMerge2 = {
        age: 21,
    }
    const merged = merge<Person, common> (toMerge1, toMerge2);

merged.name;

function exstraValue<extends object, U extends keyof T>(Obj: T, key: U) {
    return Obj[key];

}

const field = exstraValue ( {
    name: 'lara' 
}, 'age');


