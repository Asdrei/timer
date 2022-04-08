var time = 60;
var time_tot = time;
var running = false;
document.getElementById("time").innerHTML = time + 's';
console.log(time);

function add() {
    time += 15;
    time_tot += 15;
    document.getElementById("time").innerHTML = time + 's';
}

function rem() {
    time -= 15;
    time_tot -= 15;
    document.getElementById("time").innerHTML = time + 's';
}

function timer() {
    if (!running) {
        running = true;
        var timer = setInterval(function() {
            time -= 0.1;
            
            document.getElementById("greenbar").style.width = (1 - (time / time_tot)) * 100 + "%";
            
            if (time <= 0) {
                document.getElementById("time").innerHTML = "Time is Over!";
                document.getElementById("greenbar").style.width = "0%";
                time = 0;
                time_tot = 0;
                clearInterval(timer);
            }
            else {
                document.getElementById("time").innerHTML = Math.ceil(time) + 's';
                running = false;
            }
        }, 100);
    }
}
