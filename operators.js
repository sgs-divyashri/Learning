// Arithmetic Operators
function arithmeticOp(){
    let a = 15
    let b = 3
    let sum = a+b
    let diff = a-b
    let prod = a*b
    let quo = a/b
    let rem = a%b

    console.log(`Addition of ${a} and ${b} is ${sum}`)
    console.log(`Subtraction of ${a} and ${b} is ${diff}`)
    console.log(`Multiplication of ${a} and ${b} is ${prod}`)
    console.log(`Division of ${a} and ${b} is ${quo}`)
    console.log(`Modulus of ${a} and ${b} is ${rem}`)

    console.log("--------------------------------------------")

    console.log(`Addition of ${a} and ${b} is `, sum)
    console.log(`Subtraction of ${a} and ${b} is `, diff)
    console.log(`Multiplication of ${a} and ${b} is `, prod)
    console.log(`Division of ${a} and ${b} is `, quo)
    console.log(`Modulus of ${a} and ${b} is `, rem)
}

arithmeticOp()

// Logical Operators

console.log(false && true) // Logical AND
console.log(false && true && true)
console.log(true && true)
console.log(true && true && true)

console.log("---------------------")

console.log(false || false) // Loical OR
console.log(true || true || false)
console.log(false || false || true)
console.log(true || true)

console.log("---------------------")

console.log(!false) //Logical NOT
console.log(!true)
console.log(!false && true)
console.log(false && !true)

// Relational Operators