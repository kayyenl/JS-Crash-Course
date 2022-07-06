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



// array filtering question 

// let arr = ['A', 'A+', 'FAIL']
// let filteredArr = arr.filter(elem => elem !== 'FAIL')
// console.log(filteredArr)


// console log all the filtered using a loop

// let arr = ['A', 'A-', 'FAIL']
// let goodGrades = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 'FAIL') goodGrades.push(arr[i])
// }
// console.log(goodGrades)


// array mapping an array of dollars into cents

// short way
// let arr = [1,5, 10, 3]
// let newArr = arr.map(elem => elem*100)
// console.log(newArr)
// long way
// let newArrLong = arr.map ( (element) => {
//     return element*100
// })
// console.log(newArrLong)
// using only for loop (brute force)
// let newArrLoop = []
// for (let i = 0; i < arr.length; i++) {
//     newArrLoop.push(arr[i]*100)
// }
// console.log(newArrLoop)



// creating a register function with objects

// let newArr = []
// function register (user) {
//     newArr.push(user)
//     return newArr
// }
// let user = {
//     username: 'yenbson',
//     email: 'yen@burger',
//     password: 'helworld',
//     subscriptionStatus: true,
//     discordId: 'yen#123',
//     lessons: [1,2,3,4]
// }
// console.log(register(user))


// DOMS:

//TO CHANGE HTML
// first way of accessing an element
console.log(document.querySelector('#title'));
//good for classes, not usually used for id.

// second way of accessing an element
console.log(document.getElementById('title'));
// only works for id, not classes

// After accessing the id or class, we can then proceed to change the content.
document.querySelector('#title').innerHTML = "Merry Christmas"


//TO CHANGE CSS: accessing the elem is the same, but now instead of 
//innerHTML, we access the .style

document.querySelector('#title').style.color = 'red'
document.querySelector('#title').style.fontSize = '80px'

//click listeners, put onclick to the <> like onclick = "function"
//in order to activate the function.

function clickToChange() {
    if (document.querySelector('#title').style.color === 'green')
    document.querySelector('#title').style.color = 'red'
    else document.querySelector('#title').style.color = 'green'
}

