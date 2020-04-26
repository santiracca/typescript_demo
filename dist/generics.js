"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done");
    }, 2000);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.addItem("Mati");
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const friends = ["Max", "Anna"];
// friends.push("Manu");
