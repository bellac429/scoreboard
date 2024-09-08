let homeScore = 0
let guestScore = 0

let homeScoreDisplay = document.getElementById("home-score-el")
let guestScoreDisplay= document.getElementById("guest-score-el")

function addOneHome() { // add a point to home
  homeScore += 1
  homeScoreDisplay.textContent = homeScore
}

function addTwoHome() { // add two points to home
  homeScore += 2
  homeScoreDisplay.textContent = homeScore
}

function addThreeHome() { // add three points to home
  homeScore += 3
  homeScoreDisplay.textContent = homeScore
}

function addOneGuest() { // add one point to guest
  guestScore += 1
  guestScoreDisplay.textContent = guestScore
}

function addTwoGuest() { // add two points to guest
  guestScore += 2
  guestScoreDisplay.textContent = guestScore
}

function addThreeGuest() { // add three points to guest
  guestScore += 3
  guestScoreDisplay.textContent = guestScore
}

function newGame() { // reset game an scores to zero
  homeScore = 0
  guestScore = 0
  homeScoreDisplay.textContent = homeScore
  guestScoreDisplay.textContent = guestScore
}
