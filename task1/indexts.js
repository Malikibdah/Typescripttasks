//Q1
var num = 5;
if (num % 2 == 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}
;
//Q2
var arr = [220, 525, 150, 400, 340];
var prise = 300;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > prise) {
        console.log("Element at index " + arr[i] + " is greater than the given price");
    }
}
;
//Q3
var users = [
    { name: "Mustafa", age: 28, isAdmin: false },
    { name: "Malik", age: 30, isAdmin: true },
    { name: "Hadeel", age: 27, isAdmin: true },
    { name: "Duha", age: 28, isAdmin: false },
    { name: "Hosam", age: 24, isAdmin: true }
];
// البداية بقيم افتراضية
var oldestAdmin = { name: "", age: 0, isAdmin: false };
// التحقق من كل عنصر في المصفوفة
for (var i = 0; i < users.length; i++) {
    if (users[i].isAdmin && users[i].age > oldestAdmin.age) {
        oldestAdmin = users[i];
    }
}
// طباعة اسم أكبر مشرف
console.log(oldestAdmin.name);
