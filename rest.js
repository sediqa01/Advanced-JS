// Regular function call

const sumAll = (a, b, c) => a + b + c;

let sum = sumAll(1,2,3);
console.log("sum", sum);

//  Extra Arguments

let sum1 = sumAll(1,2,3,4,5,6,7);
console.log("sum1", sum1);

// rest

const sumRest = (a, b, c, ...rest) => {

    let sum = a + b + c;

    for(let i of rest){
        sum+=i;
    }

    return sum;
}
let sum3 = sumRest(1,2,3,4,5,6,7);
console.log("sum3", sum3);