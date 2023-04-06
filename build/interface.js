"use strict";
class Account {
    constructor(balance, intrest) {
        this.balance = balance;
        this.intrest = intrest;
    }
    Balance() {
        console.log("Account Details");
        if (this.intrest == null) {
            console.log("Current Balance:" + this.balance);
        }
        else {
            console.log("Saving Balance:" + this.balance * this.intrest);
        }
    }
}
let obj1 = new Account(50000);
obj1.Balance();
let obj2 = new Account(50000, 4);
obj2.Balance();
