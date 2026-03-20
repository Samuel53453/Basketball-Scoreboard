let homePoints = document.getElementById("home-score")
let awayPoints = document.getElementById("away-score")
let homecount = 0
let awaycount = 0

function onePointHome() {
    homecount += 1
    homePoints.textContent = homecount
}

function twoPointHome() {
    homecount += 2
    homePoints.textContent = homecount
}

function threePointHome() {
    homecount += 3
    homePoints.textContent = homecount
}

function onePointAway() {
    awaycount += 1
    awayPoints.textContent = awaycount
}

function twoPointAway() {
    awaycount += 2
    awayPoints.textContent = awaycount
}


function threePointAway() {
    awaycount += 3
    awayPoints.textContent = awaycount
}

function reset() {
    homecount = 0
    awaycount = 0
    awayPoints.textContent = awaycount
    homePoints.textContent = homecount
}



