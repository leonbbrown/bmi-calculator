var height = prompt('What is your height in Centimeters?');
var weight = prompt('What is your weight in Kilograms?');

let x = Math.pow(height, 2);

let a = (weight/x * 10000);

let f = a.toFixed(2);

function printMessage() {
    console.log(a.toFixed(2));
    document.getElementById('output').innerHTML = (a.toFixed(2)) ;
}
