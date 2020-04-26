"use strict";
const el = {
    name: "Max",
    priveleges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
const userInput = null;
const storedData = userInput || "DEFAULT";
console.log(storedData);
console.log(fetchedUserData.job.title);
function printEmployeeInformation(emp) {
    if ("priveleges" in emp) {
        console.log("Privileges:" + emp.priveleges);
    }
}
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck");
    }
    loadCargo(amount) {
        console.log("loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        default:
            break;
    }
    console.log("Moving with speed" + " " + speed);
}
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital letter",
};
