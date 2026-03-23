function checkConsumption() {
    let kwh = Number(document.getElementById("kwh").value);
    let result = Number(document.getElementById("result").value);

if (kwh >= 0 && kwh <= 100) {
    window.alert("Good job in saving your electricity!");
}
else if (kwh >= 101 && kwh <= 200) {
    window.alert("Normal rate. Very good.");
}
else if (kwh >= 201 && kwh <= 300) {
    window.alert("Typical rate. Good.");
}
else if (kwh >= 301 && kwh <= 500) {
    window.alert("High, try to save more electricity.");
}
else if (kwh > 500) {
    window.alert("Very high, please try to save more electricity.");
}
}