var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var House = /** @class */ (function () {
    function House(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    House.prototype.comeIn = function (person) {
        if (this.door != true) {
            throw new Error('Ivalide Key');
        }
        this.tenants.push(person);
    };
    return House;
}());
var Key = /** @class */ (function () {
    function Key() {
        this.signature = Math.random();
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHouse.prototype.openDoor = function (key) {
        if (key.getSignature !== this.key.getSignature) {
            throw new Error('not right Key');
        }
        return this.door = true;
    };
    return MyHouse;
}(House));
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
    }
    ;
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var key = new Key();
// const guest1 = new Person();
// const guest2 = new Person();
var house = new MyHouse(key);
var tenants = new Person(key);
house.comeIn(tenants);
