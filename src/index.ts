// console.log('hello world');
// let age: number = 20;
// if (age < 50)
//   age += 10;
// console.log(age);

// BUILT IN TYPES
let sales = 123_456_789
let course: string = 'TypeScript'
let is_published: boolean = true
// annotation unneseccary because typescript can infer.
// Hover over sales.

// ANY TYPE
let level;
// If not initialized Typescript will read variable as "any".
// As in, this can by any data type you want.
// But loses entire point of typescript so avoid.
level = 1
level = 'a'

function render(document: any) {
  console.log(document);
}

// ARRAYS
// let numbers: number[] = [1, 2, '3']; err: '3' is not int

let numbers: number[] = [];
// if empty array, will default to any.
// so if empty, be explicit of data type.

numbers.forEach(n => n)
// Code Completion: because TS knows it's
// number type, it will show only methods for
// number types.

// TUPLES
// 1, 'Mosh'; first element is number, second is string
// has to match EXACTLY
let user: [number, string] = [1, 'Mosh']

user.push(1);
// DOWNSIDE: can store 3rd value, but no error.
// BEST PRACTICE: Stay to two values.

// ENUMS
// list of related constants
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium
// Will inherently start with 0, 1, 2...
// If you don't want to use default (0, 1, 2) you can
// explicitly set values.
// If you want to use another type, explicitly set 
// values for each.

console.log(mySize);

// FUNCTIONS
// Best practice to annotate return type
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022)
    return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

// OBJECTS
// let employee: {
//   readonly id: number,
//   name: string,
//   retire: (date: Date) => void;
// } = {
//   id: 1, 
//   name: 'Mosh', 
//   retire: (date: Date) => {
//   console.log(date);
// }};
// readonly prevents us from accidentally 
// modifying value.

// TYPE ALIASING
/*If you create another emplyee obj. avoid repeating code.*/
/* Follow the DRY Principle: Don't repeat yourself */

// code look difficult to read so we use TYPE ALIAS

type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void;
}

//to move part of code up (macOS): option + ^; (Windows): Alt + ^
let employee: Employee = {
  id: 1, 
  name: 'Mosh', 
  retire: (date: Date) => {
  console.log(date);
}};

// UNION TYPES
//: number - it will return a number
// if type 'weight.', will only see methods 
// that applies to both number & string 
function kgToLbs(weight: number | string): number {
  //Narrowing: narrow union type to specific type.
  if (typeof weight === "number")
    // now knows it's number type when typing "weight."
    return weight * 2.2;
  else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs('10kg');

// INTERSECTION TYPES
 type Draggable = {
  // drag is method
  drag: () => void
 };

 type Resizable = {
  // resize is method
  resize: () => void
 };

 // intersection
 type UIWidget = Draggable & Resizable;

 // now initialize vairable tetbox to return UWidget type.
 // implement drag & resize method in code block.
 let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
 }

 // LITERAL TYPE
 // limit the value to variable
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// can be used for strings too
type Metric = 'cm' | 'inch'

// NULLIBLE TYPE
// valid JS but will crash because cannot call upon
// .toUpperCase on null.
// with code below, we can pass null.
function greet(name: string | null | undefined) {
  if (name)
    console.log((name.toUpperCase()));
  else
    console.log('Hola!');
}

greet(null);

// OPTIONAL CHAINING
type Customer = {
  birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
  // if id is 0, return null, otherwise retrun object with bday.
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined)
// too long, let's make this simple.

// Optional property access operator: ?
// ? is same as - if (customer !== null && customer !== undefined)
  console.log(customer?.birthday?.getFullYear);
  // will execute only if customer and customer has birthday
  // otherwise, undefined.

// type "tsc && node dist/index.js" to run console.log in terminal
// type tsc to compile TypeScript to JS.

// Optional element access operator (OEAO)
// good for arrays
// if (customers !== null && customers !== undefined)
// too long, so just use: "?.""
// customers?.[0]

//Optional call
// same syntax as OEAO

let log: any = null;
log?.('a');