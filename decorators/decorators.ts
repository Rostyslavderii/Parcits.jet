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



