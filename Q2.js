"use strict";
class student {
    name;
    studentId;
    grade;
    address;
    constructor(name, studentId, grade, address) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }
    displaInfo() {
        console.log(this.name);
        console.log(this.studentId);
        console.log(this.grade);
        console.log(this.address);
    }
}
const st = new student("name", 10001, "A", "Mumbai");
st.displaInfo();
