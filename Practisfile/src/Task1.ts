{

//     Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.

// Instructions:

// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.

    const functio1 = (name : string , age: number , role?: "admin"| "Menber" |"trainer")  =>{
        console.log(name);
        console.log(role);
    }

    type userdeatils = {
        name : string , 
        role : number,
        details : string,
        class : number,
        Email?: string 

    }

    const studentDetails = (valu : userdeatils) => {
        
    }
}