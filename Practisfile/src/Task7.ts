{
//     Task 7: Type Assertion and Narrowing
// Objective: Write a function that behaves differently based on the input type.

// Instructions:

// Create a function that accepts a parameter of type string | number.
// The function should:
// Return the length if the input is a string.
// Return the square if the input is a number.

const numberreturn = ( value: string | number ) => {
    if(typeof value === "number"){
       const vag = value*1000/20
       return vag
    }
    else if(typeof value === "string"){
    const number = parseFloat(value)
    const vag = number*1000/2
    return vag ;

    }
}

const pasNumber = numberreturn(100)
const pasNumber2 = numberreturn("100")

}