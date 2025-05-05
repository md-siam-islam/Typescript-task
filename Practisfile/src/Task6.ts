{
//     Task 6: Spread and Rest Operators, Destructuring
// Objective: Write a function that uses the rest operator for variable-length arguments.

// Instructions:

// Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

const Sumnuber = (...value : number[]) : number => {

    const trduceNumber = value.reduce((total:number,sum:number) => total + sum ,0)

return trduceNumber
}

}