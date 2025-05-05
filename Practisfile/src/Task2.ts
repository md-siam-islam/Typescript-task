{

//     Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.


//     //task 3 type alias diya akta person ar details create kora 

    type personDEtailsformate ={
        Name : string,
        Address: string,
        Haircolor: "red" | "yello" | "blue" | "Green",
        Eyecolor: "red" | "yello" | "blue" | "Green",
        Income : number,
        Expense : number, 
        Hobbies : string [], 
        FamilyMembers : string[],
        Job : string, 
        Skills : string [], 
        MaritalStatus : string, 
        Friends : string[]
    }

    const SiamDetails: personDEtailsformate = {
        Name: "Siam",
        Address: "Dhaka, Bangladesh",
        Haircolor: "blue",
        Eyecolor: "blue",
        Income: 50000,
        Expense: 20000,
        Hobbies: ["Coding", "Gaming", "Reading"],
        FamilyMembers: ["Father", "Mother", "Sister"],
        Job: "Frontend Developer",
        Skills: ["HTML", "CSS", "JavaScript", "React"],
        MaritalStatus: "single",
        Friends: ["Rafi", "Tisha", "Nadim"]
    }

    console.log(SiamDetails);
    
}