"use strict";
class Person {
}
class Student extends Person {
    name = "Tom";
    id = 1500;
    getDetails() {
        console.log("studentDeatils" + this.id + this.name);
    }
    getRole() {
        console.log("student Role");
    }
}
class teacher extends Person {
    name = "jeery";
    role = "science teacher";
    getDetails() {
        console.log("teacher details" + this.name);
    }
    getRole() {
        throw new Error("teacher role" + this.role);
    }
}
const s = new Student();
s.getDetails();
s.getRole();
const t = new teacher();
t.getDetails();
t.getRole();
