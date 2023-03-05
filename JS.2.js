let player = {
    name: "Player",
    chips: 150
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messgae = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
 }


let userName = prompt("Who's there?", '');

   if(userName === "Alia") {

let pass = prompt('Password?', '');

   if(pass === "The Princess") {




                    function startGame() {
                        if (isAlive = true || hasBlackJack == true) {
                        let firstCard = getRandomCard()
                        let secondCard = getRandomCard()
                        cards = [firstCard, secondCard]
                        sum = firstCard + secondCard
                        renderGame()
                        }
                    }
                    
                    function renderGame() { 
                        cardsEl.textContent ="Cards: "
                        for ( let i = 0; i < cards.length; i++) {
                            cardsEl.textContent += cards[i] + " "
                        }

                        sumEl.textContent = "Sum: " + sum 
                    if (sum <= 20) {
                        messgae = "Do you want to draw a new card?"
                    } else if (sum === 21) {
                        messgae = "You've got blackjack!"
                        hasBlackJack = true 
                        
                    } else {
                        messgae = "You're out of the game!"
                        isAlive = false
                    }
                     messageEl.textContent = messgae
                    }
                    
                    function newCard() {
                        if (isAlive === true && hasBlackJack === false) {
                    let card = getRandomCard()
                    sum += card
                    cards.push(card)
                    renderGame()
                        }
                    }


                } else if (pass === '' || pass === null) {
                    alert( 'Cancelled' );
                } else {
                    alert( 'Wrong password' );
                }

            } else if (userName === '' || userName === null) {
                    alert( 'Cancelled' );
            } else {
                alert( "I don't know you" );
            }






/* let featuredPosts = ["Check out my Netflix clone", "Here's the code for my project", "I've just relaunched my portfolio"]
let codingEducation = ["I have earned FreeCodeCamp Certificates", "I have completed some of The Odin Project", "I used lots of Free On-line resources", "I am mainly Self Taught"]
console.log(codingEducation[0])
console.log(codingEducation[1])
console.log(codingEducation[2])
console.log(codingEducation[3])

let aboutMe = ["I am Amazing", 38, "and yes, I like pizza!"]
console.log(aboutMe[0]) */



/* let age = 22

if (age < 21) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
} */

/* let age = 100

if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthhday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
} */

/* let message = ["Hey, how's it going?", "I'm great, thank you! How about you?", "All good. Been working on my portfolio lately."]

let newMessage = "Same here!"

message.push(newMessage)
console.log(message)
message.pop()
console.log(message) */

/* for ( let i = 0; i < message.length; i += 1) {
    console.log(message[i]) 
} */

/* let cards1 = [7, 3, 9]

for ( let i = 0; i < cards1.length; i ++) {
    console.log(cards1[i])
} */

/*let sentence = ["hello", "my", "name", "is", "Brian"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
    console.log(sentence[i])
} */


 
/* for (let count = 10; count < 101; count += 10) {
console.log(count)
} */

/* let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()
console.log.apply(fastestRace) */


/* function totalRaceTime() {
    return player1Time + player2Time
}

let totalTime = totalRaceTime()

console.log(totalTime) */

//let randomNumber = Math.random() * 6

/* let flooredNumber = Math.floor(3.45632)

console.log(flooredNumber) */




/* function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}

console.log(rollDice()) */



/* let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
         generateCertificate()
}

function generateCertificate() {
    console.log("Generating Certificate....")
} */



/* let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
         showSolution()
}

function showSolution() {
    console.log("Showing Solution....")
} */



/* let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, we think you will like this movie!")
} */


/* let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Brian Javelle Gates",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.creator)
console.log(course["title"]) */


/* let marriage = {
    husband: "Brian Javelle Gates",
    wife: "Alia Marie Gates",
    yearsMarried: 6,
    children: 3,
    ifHappy: true,
    residence: ["The married couple lives in Arizona"]
}

console.log(marriage.husband)
console.log(marriage["wife"])
console.log(marriage.ifHappy)
console.log(marriage["residence"]) */


/* let person = {
    name: "Amazing Gates",
    age: "Eternal",
    location: "Earth"
}

function logData() {
    console.log(person.name + " is " + person.age + " and lives on " + person.location)
}

logData() */

/* let age = 15

if (age < 6) {
    console.log("free")
} else if (age >= 6 || age < 18 ) {
    console.log("child discount")
} else if (age >= 18 || age < 27 ) {
    console.log("student discount")
} else if (age >= 27 || age < 67) {
    console.log("full price")
} else {
    console.log("senoir citizen discount")
} */


/* let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]


console.log("The 5 largest countries in the world:")
 for ( let i = 0; i < largeCountries.length; i += 1) {
    console.log("- " + largeCountries[i]) 
} */


/* let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

let newCountry = "China"
let newCountry1 = "Pakistan"

largeCountries.pop()
largeCountries.shift()
largeCountries.push(newCountry1)
largeCountries.unshift(newCountry)
console.log(largeCountries) */


/* let dayOfMonth = 13
let weekDay = "Friday"

if (dayOfMonth === 13 && weekDay === "Friday") {
    console.log("Spooky Face")
} */


/* let hands = ["rock", "paper", "scissor"]

function handGame() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
console.log( handGame() ) */









