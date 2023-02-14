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

const pageAnnotation: Pick<Page, 'annotation' | 'numberPage'> = {
  annotation: 'Small page',
  numberPage: 1,
};


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