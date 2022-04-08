var time = 60;
var running = false;
document.getElementById("progressbar").innerHTML = time + 's';
console.log(time);

function add() {
    time += 15;
    document.getElementById("progressbar").innerHTML = time + 's';
}

function rem() {
    time -= 15;
    document.getElementById("progressbar").innerHTML = time + 's';
}

function timer() {
    if (!running) {
        running = true;
        var timer = setInterval(function() {
            time -= 1;
            if (time <= 0) {
                document.getElementById("progressbar").innerHTML = "Time is Over!";
                clearInterval(timer);
            }
            else {
                document.getElementById("progressbar").innerHTML = time + 's';
                running = false;
            }
        }, 1000);
    }
}
