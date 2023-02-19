type ComplexType = string | number; 




function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    if (typeof resolve === 'string') {
      resolve(['Text', 50]);
    }
})
};


getPromise ()
.then((data) => {
  console.log(data);
});

type resolve = {
  text: string;
  number: number;
}

interface Page {
  title: string;
  annotation: string;
  numberPage: number;
}

const pageAnnotation: Pick<Page, 'annotation' | 'numberPage'> = {
  annotation: 'Small page',
  numberPage: 1,
};

// Есть функция, она принимает два аргумента, в один попадает
//  name и color в другую часть position и weight. Нужно явно указать, что эти поля из AllType.
// И сама функция возвращает AllType.Воспользуйтесь Pick.

const pickAll1: Pick<AllType, 'name' | 'color'> = {
  name:'alex',
color: 'green',
}


const pickAll2: Pick<AllType, 'position' | 'weight'> ={
  position:50,
weight: 50,
}


function propType<pickAll1, pickAll2>(carl: pickAll1, son: pickAll2) {
  
  return {
    name: pickAll1.name, 
    color: pickAll1.color,
    position: pickAll2.position,
    weight: pickAll2.weight,

}



}

type AllType =  { 
  name: string; 
  position: number;
  color: string;
  weight: number;
}



function compare (top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}


// Укажите дженерики для функции объединения объектов.


function merge<Y extends object, Z extends object >(objA: Z, objB: Y) {
  return Object.assign(objA, objB);
}

const merged = merge({name: 'Alisa'}, {age: 28});



class Component {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

// У вас есть следующие классы

class Component {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

// Только добавляя дженерики для классов и интерфейс уберите ошибку.
