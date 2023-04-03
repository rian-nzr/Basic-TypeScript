"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class Employee extends Person {
    constructor(name, code) {
        super(name); // must call super()
        this.empCode = code;
    }
    find(name) {
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}
let emp = new Employee("James", 100);
emp.display(); //James
console.log(emp.name);
let emp2 = emp.find('Steve');
