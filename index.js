//defining all the home score button values
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")

//defining all the guest score button values
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")

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

function addThree() {
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