const marks = [10,20,80,90,95,99]

function student(marks) {
    return marks.filter(marks=> marks>80)
}

console.log(student(marks));
