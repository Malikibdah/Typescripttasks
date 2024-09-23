//Q1
let num : number = 5 ;
if(num %2 == 0){
    console.log("Number is even");
} else { 
    console.log("Number is odd");
};
//Q2
let arr : number[] = [220,525,150,400,340];
let prise : number = 300; 

for(let i = 0; i < arr.length; i++){
        if (arr[i] > prise){
            console.log("Element at index " + arr[i] + " is greater than the given price");
        }
    };
//Q3
let users = [
    { name: "Mustafa", age: 28, isAdmin: false },
    { name: "Malik", age: 30, isAdmin: true },
    { name: "Hadeel", age: 27, isAdmin: true },
    { name: "Duha", age: 28, isAdmin: false },
    { name: "Hosam", age: 24, isAdmin: true }
];

let oldestAdmin = { name: "", age: 0, isAdmin: false };

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin && users[i].age > oldestAdmin.age) {
        oldestAdmin = users[i];
    }
}

console.log(oldestAdmin.name);
