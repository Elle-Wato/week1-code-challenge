// SPEED DETECTOR

let carSpeed = prompt("car speed:");
let speedLimit = 70;

let kmPerS = 5;
let demeritPoints = (carSpeed - speedLimit) / 5;

if (carSpeed <= 70){
    alert("OK");
} else if (demeritPoints > 12) {
    alert ("LIcense Suspended");
} else {
    alert("POints :" + demeritPoints);
}