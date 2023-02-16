class DataStore<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push.item;
    }



    getItem(): T[] {
        return this.data;
    }

}


    interface IPerson2 {
        name: string;
}
    
const storeUser = new DataStore<IPerson2>();

storeUser.addItem({name:'Anton'});
storeUser.addItem({ name: 'MAx' });

console.log(storeUser.getItems());

const ageStore = new DataStore<number>();

ageStore.addItem(21);

//Utility Types

interface IUser {
    name: string;
    age: number;
}

function createPerson(name: string): IUser{
    const person: Partial<IUser> = {
        name,
    };
    person.age = 22;

    return person as IUser;
}

// Utility Types 2

const arr: Readonly<string[]> = ['plaine', '2', '23'];
const obj: Readonly<IPerson> = {
    name: 'carl';
};

arr.push('2');
arr.pop();

interface IPerson {
    name: string;
}


interface Page {
    title: string;
    annotatin: string;
    numberPage: number;
}

const pageAnnotation: Pick<Page, 'annotation' | 'numberPage'> = {
    annotation: 'Small page',
    numberPage: 1,
}
