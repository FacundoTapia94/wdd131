
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = document.lastModified;

window.onload = function () {
    let temperature = 10;
    let windSpeed = 5;

    let windChill;

    function calculateWindChill(temp, speed) {
        return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
    } else {
        windChill = "N/A";
    }

    document.getElementById("windChill").textContent = windChill;

}