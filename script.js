let hour = min = sec = '00';
let mill = "000"
let variable = "";
let array = []
let count = 0;
function startfunction() {

    variable = setInterval(() => {

        mill++
        if (mill == 1000) {
            sec++;
            if (sec < 10) { sec = '0' + sec }
            mill = "000"
        }
        if (sec == 60) {
            min++;
            if (min < 10) { min = '0' + min }
            sec = "00"
        }
        if (min == 60) {
            hour++;
            if (hour < 10) { hour = '0' + hour }
            min = "00"
        }
        document.getElementById('hour').innerText = hour;
        document.getElementById('min').innerText = min;
        document.getElementById('sec').innerText = sec;
        document.getElementById('mil').innerText = mill;
    }, 1)
}



function pausefunction() {

    clearInterval(variable);
}
function resetfunction() {
    clearInterval(variable);
    document.getElementById('hour').innerText = "00";
    document.getElementById('min').innerText = "00";
    document.getElementById('sec').innerText = "00";
    document.getElementById('mil').innerText = "000";
    hour = min = sec = '00';
    mill = "000"
}
function castfunction() {
    count++;
    array.push(`cast${count}:${hour}:${min}:${sec}:${mill}`)


    document.getElementById('display').innerHTML = array.map((value) => {
        return (`<h3 id ="data" >${value}</h3>`)
    })

}







