function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger 
class Conroller {
    public id = 1;
}


interface IDecoration { 
    parent: string;
    template: string;
}


function ContollerDecoration(config: IDecoration) {
    return function <T extends { new(...args: any[]): { content: string } }>(originalConstructor: T) {
            
        return class extends originalConstructor {
            private element: HTMLElement;
            private parent: HTMLElement;
            constructor(...arg: any[]) {
                super(...arg);
                this.parent = document.getElementById(config.parent)!
                this.element = document.getElementById(config.template);
                this.element.innerHTML = this.content;
                this.parent.appendChild(this.element);
            }
        }
        }
}

@ContollerDecoration({
    parent: 'app',
    template: 'h1',
})
class Controller {
    public content = 'My costim controller'
}

const controller = new Controller();
const controller2 = new Controller();
const controller3 = new Controller();



function ShowMeParams(target: any, name: string, descriptor: PropertyDescriptor) {
    
    console.log('target', target);
    console.log('name', name);
    console.log('descriptor', descriptor);
}

class Notifier {
    @ShowMeParams 
    @AutoBind
    showMessage() {
        console.log('Show message');
    }
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    return {
        configurable: true, 
        enumerable: false, 
        get() {
            return method.bind(this);
        }
    }

}

const notifier = new Notifier();

const showMessage = notifier.showMessage;

showMessage();

function AddTax(taxPaier: number) { 
    return (_: any, _2: string, descriptor: PropertyDescriptor) => {

        const method = descriptor.value as Function;
        return {
            configurable: true,
            enumerable: false,
            get() {
                return (...args: any[]) => {
                    const result = method.apply(this, args);
                    return result + (result / 100 * taxPaier)
                }
            }
        }
    }
}

class Payment {
    @AddTax(100)
    pay(money: number):number {
        return money;
    }
}
    
const cost = new Payment();

console.log('amount with tax:', cost.pay(100));






function Charle(target: any, name: string, position: number) {
    console.log('target', target);
    console.log('name', name);
    console.log('position', position);
}

class Personal {
    setEmail(@Charle email: string) {
        console.log(email)
    }
}

function ChackImael(target: any, name: string, position: number) {
    if (!target[name].validation) {
        target[name].validation = {};
    }
    Object.assign(target[name].validation, {
        [position]: (value: string) => {
            if (value.includes('@')) {
                return value;
            }
            throw new Error('No valid field');
        }
    })
}

function Validations(_: any, _2: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    return {
        configurable: true,
        enumerable: false, 
        get() {
            return (...args: any[]) => {
                if (method.validation) {
                    args.forEach((item, index) => {
                        if (method.validation[index]) {
                            args[index] = method.validation[index](item);
                        }
                    })
                }
                return method.apply(this, args);
            }
        }
    }
}

class Personyo {
    @Validation 
    setEmail(@CheckEmail email: string) {
        console.log(email);
    }
}



const personya = new Personyo();

personya.setEmail('test@gmail.com');

function Required(target: any, propertyName: string | Symbol) {
    console.log('Required');
    console.log(target, propertyName);
}

function PositiveNumber(target: any, propertyName: string | Symbol) {
    console.log('positiveNumber');
    console.log(target, propertyName);

}



class Personalu {
    @Required
    name: string;
    @PositiveNumber
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
}

