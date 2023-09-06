
document.getElementById("myBMI").onclick = function(){

    var myHeight = document.getElementById("myHeight").value;
    var myWeight = document.getElementById("myWeight").value;
    var x = Math.pow(myHeight, 2);
    var a = (myWeight/x * 10000);
    console.log(a.toFixed(2));
    document.getElementById('output').innerHTML = 'Your Body Mass Index is: ' + (a.toFixed(2)) ;
}