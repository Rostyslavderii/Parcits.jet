abstract class House {

    protected door = false;
    private tenants: Person[] = [];


    public comeIn(person:Person):void {
        if (this.door != true) {
        throw new Error ('Ivalide Key')
        }
        this.tenants.push(person);
        console.log('person inside')
    }

    constructor( protected key:Key) { // public key: boolean ?? // принимает обьект класска кей и сохраняет его в свойство кей.
    }
    
public abstract openDoor(key:Key): boolean;
}

class Key {
    private signature: number;
    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class MyHouse extends House {
    openDoor(key:Key) {
        if (key.getSignature !== this.key.getSignature) {
        throw new Error ('not right Key')
        }
        return this.door = true;
    }

}

class Person {
    constructor( private key:Key) { };
    getKey(): Key {
        return this.key
    }
}

let key = new Key();

const house = new MyHouse(key)
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

console.log(person);
console.log(person.getKey());



