import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent {    
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    address;

    foo: any;
    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusuable: void;
    u: undefined;
    n: null;





    // Methods
    constructor() {
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.age = 30;
        this.address  = {
            street: '50 Main st',
            city: 'Cincinnati',
            State: 'Ohio'
        };

        this.foo = true; 
        this.hasKids = true;
        this.numberArray = [1,2,3];
        this.stringArray = ['hello', 'me'];
        this.mixedArray = [true, undefined, 'hello', 5];
        this.myTuple = ['hello',1,true];
        this.unusuable = undefined;
        this.u = undefined;
        this.n = undefined;



    }



    sayHello() {
        console.log(`Hello ${this.firstName}`);
    }

    hasBirthday() {
        this.age += 1;
    }

    addNumbers(num1: number, num2:number): number {
        return num1 + num2;
    }

    // console.log(this.addNumbers(2, 3));
}