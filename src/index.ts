console.log("asd")
let age: number = 20
 if (age < 50) 
    age +=10
 console.log(age);
 
 let sales = 123_456_789;
 let course: string = 'Typescript';
 let is_published: boolean = true;

 //arrays
 let number = [1,2,3];
 let example: number[] = [1, 2, 3];

 //tuples
 let user: [number, string] = [1, "Andras"]

 //enum
//  const small = 1;
//  const medium = 2;
//  const large = 3; 



 //use PascalCase
 const enum Size { Small = 1, Medium, Large }; 
 let mySize: Size = Size.Medium;
 console.log(mySize);
 