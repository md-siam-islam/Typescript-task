{

//     Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.


    // interfaces type

    interface book {
        name : string , 
        auth : string, 
        page : number
    }

    // intersection type

    interface magazin {
        name : string, 
        publicer : string , 

        issueNumber : number
    }


    type TypeUnion = book | magazin

    type TypeIntersection = book & magazin

    const Union : TypeIntersection = {
        name : "English" , 
        auth : "Siam", 
        page : 205,
        publicer : "siam" , 
        issueNumber : 15
    }
}