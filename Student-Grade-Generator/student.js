// GRADE GENERATOR

let marks = prompt("PLease enter your marks:");

if (marks > 100 || marks < 0){
    alert("invalid marks");
}
if (marks >= 79 && marks <= 100){
    alert("grade: A");
} else if (marks >= 60 && marks <= 79){
    alert("grade: B");
} else if (marks >= 49 && marks <= 59) {
    alert("grade: C");
}else if (marks >= 40 && marks <= 49){
    alert("grade: D");
}else if (marks >= 0 && marks <= 40){
    alert("grade: E");
} 