//variables
console.log("asd");
let age: number = 20;
if (age < 50) age += 10;
console.log(age);

let sales = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;

//arrays
let number = [1, 2, 3];
let example: number[] = [1, 2, 3];

//tuples
let user: [number, string] = [1, "Andras"];

//enum
//  const small = 1;
//  const medium = 2;
//  const large = 3;

//use PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

//functions
//anotated will flag it no return or wrong type
function calculateTax0(anincome: number): number {
  return 3;
}

//not annotated, didnt flag empty return
function calculateTax1(anincome: number) {}

//anotated as void, didnt flag it empty return
function calXculateTax2(anincome: number): void {}

// not annotated, if anincome would be more than 30000 it would return undifined
function calculateTax3(anincome: number): number {
  if (anincome < 30000) return anincome * 1.2;
  return anincome * 1.3;
}

function calculateTax4(anincome: number, taxYear: number): number {
  if (taxYear < 2022) return anincome * 1.2;
  return anincome * 1.3;
}

calculateTax4(10000, 2022);

function calculateTax5(anincome: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) return anincome * 1.2;
  return anincome * 1.3;
}

calculateTax5(10000);

function calculateTax6(anincome: number, taxYear = 2022): number {
  if (taxYear < 2022) return anincome * 1.2;
  return anincome * 1.3;
}

calculateTax6(10000, 2023);

//Objects are dynamic in JS. We can add properties later on. In TS this is not the case
// let employee = { id: 1};
// employee.name = "Andras"

let employee: {
  id: number;
  name: string;
} = { id: 1, name: "" };
employee.id = 2;

// Type aliases
let employee2: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = { id: 1, name: "andras", retire: (date: Date) => console.log(date) };

type Employee3 = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee3: Employee3 = {
  id: 1,
  name: "andras",
  retire: (date: Date) => console.log(date),
};

//union types and narrowing
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
 
 //Intersection types - both at the same time
 type Draggable = {
   drag: () => void
 }

 type Resizeble = {
   resize: () => void
 }

 type UIWidget = Draggable & Resizeble;

//Literal types
type Quantity = 50 | 100
let quantity: Quantity = 50;

//Nullable types
function greet(name: string | null){
   if (name)
   console.log(name.toUpperCase);
   else
   console.log("Hola");
}
greet(null)