{
//     Task 8: Optional Chaining
// Objective: Use optional chaining with nested objects.

// Instructions:

// Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.


type unserdetails = {
    name : string ,

    address: {
        city: string
    }
}

const userdetailscheack = ( value: unserdetails) : string | undefined => {
    if(value.address?.city){
        return value.address.city
    }
    
}
}