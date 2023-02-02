// Find errors and name their types:

// 1
const someMethod = () => {
  console.log(counter1)
  console.log(counter2)
  var counter1 = 1
  let counter2 = 2
}

// 2
let someThing = {
  action: 'I do something'
}
someThing.action()

// 3
let array
array.map(item => console.log(item))

// 4
const user1Age = 55
const user2Age = 14
if ((user1Age > user2Age) && (user2Age > 18) {
  console.log("All users are of age!")
}

// 5
const translations = {
  en: "Good morning",
  de: "Guten Morgen",
  rs: "Dobro jutro",
}

for (let key of Object.entries(translations)) {
  console.log(key, translations[key])
}


// 6
let userName = "John Doe"
const myFunc = () => {
  let userName = "Nick"
  let userName = "Abraham"
  console.log(userName)
}

myFunc()
console.log(userName)
