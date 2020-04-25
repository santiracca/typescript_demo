"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let user1;
user1 = {
    name: "Max",
    greet(val) {
        console.log(val);
    },
};
