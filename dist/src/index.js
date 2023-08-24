"use strict";
console.log("asd");
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let number = [1, 2, 3];
let example = [1, 2, 3];
let user = [1, "Andras"];
let mySize = 2;
console.log(mySize);
function calculateTax3(anincome) {
    if (anincome < 30000)
        return anincome * 1.2;
    return anincome * 1.3;
}
function calculateTax4(anincome, taxYear) {
    if (taxYear < 2022)
        return anincome * 1.2;
    return anincome * 1.3;
}
calculateTax4(10000, 2022);
function calculateTax5(anincome, taxYear) {
    if ((taxYear || 2022) < 2022)
        return anincome * 1.2;
    return anincome * 1.3;
}
calculateTax5(10000);
function calculateTax6(anincome, taxYear = 2022) {
    if (taxYear < 2022)
        return anincome * 1.2;
    return anincome * 1.3;
}
calculateTax6(10000, 2023);
let employee = { id: 1, name: "" };
employee.id = 2;
let employee2 = { id: 1, name: "andras", retire: (date) => console.log(date) };
let employee3 = {
    id: 1,
    name: "andras",
    retire: (date) => console.log(date),
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
//# sourceMappingURL=index.js.map