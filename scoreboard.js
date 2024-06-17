let homeScore = 0
let guestScore = 0

let homeScoreDisplay = document.getElementById("home-score-el")
let guestScoreDisplay= document.getElementById("guest-score-el")

function addOneHome() {
  homeScore += 1
  homeScoreDisplay.textContent = homeScore
}

function addTwoHome() {
  homeScore += 2
  homeScoreDisplay.textContent = homeScore
}

function addThreeHome() {
  homeScore += 3
  homeScoreDisplay.textContent = homeScore
}

function addOneGuest() {
  guestScore += 1
  guestScoreDisplay.textContent = guestScore
}

function addTwoGuest() {
  guestScore += 2
  guestScoreDisplay.textContent = guestScore
}

function addThreeGuest() {
  guestScore += 3
  guestScoreDisplay.textContent = guestScore
}

function newGame() {
  homeScore = 0
  guestScore = 0
  homeScoreDisplay.textContent = homeScore
  guestScoreDisplay.textContent = guestScore
}
