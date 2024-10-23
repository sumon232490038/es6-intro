// function declaretion
// function expratin
// function arrow ba arrow function ja es6 er verson

// example

function add(a,b){
    const add = a + b
    return add


}

const sub = add(10 ,6)
console.log(sub)

const divide = function(a,b){
    const divide = a / b
    return divide 
}
const divide2 = divide(50,3) 
console.log(divide2)

// arrow function 
const add2 = (a,b) => a-b;
const subt = add2(50,39)
console.log(subt)


const mul = (a,b,g) => a * b - g

const doit = mul(5,7,9)
console.log(doit)  