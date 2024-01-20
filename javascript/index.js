//temperature converter



function toFahrenheit(temp){
    temp = temp * 9/5+32;
    return temp;
}
function toCelsiuse(temp){
    temp = (temp-32)*(5/9);
    return temp;
}
document.getElementById("celsiuse").onclick = function(){
    let temp = document.getElementById('input').value;
    document.getElementById("label").innerHTML = toCelsiuse(temp).toFixed(0) + "°C";
    
}
document.getElementById("fahrenheit").onclick = function(){
    let temp = document.getElementById('input').value;
    document.getElementById("label").innerHTML = toFahrenheit(temp).toFixed(0) + " F";
}
