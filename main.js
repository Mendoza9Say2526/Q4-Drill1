function checkConsumption() {
    let kwh = Number(document.getElementById("kwh").value);
    let resultElement = document.getElementById("result");
    let message = "";

    if (isNaN(kwh) || kwh < 0) {
        message = "Please enter a valid non-negative KWH value.";
    } else if (kwh <= 100) {
        message = "Good job in saving your electricity!";
    } else if (kwh <= 200) {
        message = "Normal rate. Very good.";
    } else if (kwh <= 300) {
        message = "Typical rate. Good.";
    } else if (kwh <= 500) {
        message = "High, try to save more electricity.";
    } else {
        message = "Very high, please try to save more electricity.";
    }

    resultElement.textContent = message;
}
