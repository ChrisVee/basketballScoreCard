const homeScoreEl = document.getElementById("homeScore")
const guestScoreEl = document.getElementById("guestScore")

let homeScore = 0
let guestScore = 0

// all functions to for HOME scoring
function homeAddOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeAddTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeAddThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


// all functions to for GUEST scoring
function guestAddOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestAddTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestAddThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
