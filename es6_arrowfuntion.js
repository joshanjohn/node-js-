function add(a,b){
    return a+b
}

console.log(add(10,20))

//above funtion can be easily writen as 

let add1=(a,b) => a+b
let add2=(a,b) => {return a+b}
console.log(add2(20,40))
console.log(add1(100,20))