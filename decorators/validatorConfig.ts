interface ValidatorConfig {
    [property: string]: {
    [validatableProp: string]: string[];
};
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string,) {
    
    registeredValidators[target.contructor.name] = {
        ...registeredValidators[target.constructor.name], [propName]: ['required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name], [propName]: ['positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) { 
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break
            }
        }
    }
    return isValid
}

class Persion {
    @Required
    name: string;
    @PositiveNumber;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
}

const persion = new Persion('', -1);

if (!validate(person)) {
  console.log('Validation error!');
} else {
    console.log('Validation ok!');
    

    const persion1 = new Persion('alex', 30);
    if (!validate(persion)) {
        console.log('validation error!');
    } else {
        console.log('validation ok!');
    }
}