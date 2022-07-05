// cleaner soln to cashier problem
// let cash = 30
// let price = 30
// let diff = cash - price
// if (cash > price) {
//     console.log("You paid extra - here's " + diff + " dollars change.")
// }
// else if (cash === price) {
//     console.log("You paid the exact amount, have a nice day.")
// }
// if (cash < price) {
//     console.log("not enough money - you still owe me " + -diff + " dollars!")
// }



// ternary gymnastics
// let subscribed = true
// let loggedIn = true
// let str = subscribed && loggedIn ? "ok watch the video" : "no dont watch shit"
// console.log(str)



// so cashier part 2
// let cash = 40
// let price = 30
// let isStoreOpen = true
// let enough = cash >= price
// let resultStr = enough && isStoreOpen ? "print the receipt" : "do not give receipt"
// console.log(resultStr)


// FizzBuzz problem FES 
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " -> Frontend Simplified")
//     }
//     else if (i % 3 === 0) {
//         console.log(i + " -> Frontend")
//     }
//     else if (i % 5 === 0) {
//         console.log(i + " -> Simplified")
//     }
//     else {
//         console.log(i + " -> " + i)
//     }
// }

// printing out every char in a word
// const str = "Frontend Simplified"
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// celcius question using functions (arrow too)

// function celciusToFahrenheit (celcius) {
//     return celcius * 1.8 + 32
// } 
// const arrowCelciusToFahrenheit = (celcius) => {
//     return celcius * 1.8 + 32
// }
// console.log(celciusToFahrenheit(0))
// console.log(celciusToFahrenheit(10))
// console.log(celciusToFahrenheit(30))
// console.log(arrowCelciusToFahrenheit(0))
// console.log(arrowCelciusToFahrenheit(10))
// console.log(arrowCelciusToFahrenheit(30))
