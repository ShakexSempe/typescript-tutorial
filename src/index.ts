// BASIC TYPES 
let id: number = 5;
let age: number 
let company: string = "Box Shadow"
let isPublished: boolean = true
let x: any = "hello"
let numberArray: number[] = [1,2.3,4,5] /* ARRAY CONTAINING ONLY NUMBERS*/
let anyArray: any[] = [1, true, 'hello'] 

// TUPLE - SPECIFY TYPES WITHIN ARRAYS
let person: [number, string, boolean] = [1, 'brad', true]
// TUPLE ARRAY (ARRAY OF TUPLES)
let skillsArray: [number, string, boolean] []
skillsArray = [
    [1, 'html 5', true],
    [2, 'css 3', true],
    [3, 'javascript', true]
]

// UNIONS - ENABLE VARIABLES TO HOLD MORE THAN ONE TYPE
let language : string | number
language = 'css'
language = 3

// ENUM - ENUMERATED TYPE
enum Direction1 {
    Up = 2 ,
    Down, 
    Right, 
    Left
}
// console.log(Direction1.Down);

enum Direction2 {
    Up = "Up" ,
    Down = "Down", 
    Right = "Right", 
    Left = "Left"
}
// console.log(Direction2.Down);

// OBJECTS 
type User = {
    id: number, 
    name: string,
    age: number
}
const user: User = {
    id: 1,
    name: 'Tumi',
    age: 31
}

// TYPE ASSERTION
let cid:any = 1
// let customerID = <number>cid
let customerID = cid as number 

cid = 'a';
customerID = 3

// FUNCTIONS
// FUNCTION W RETURN VALUE
function addNum(x: number, y: number): number {
    return x + y
}
// console.log(addNum(1, 3));

// VOID - FUNCTION W/OUT RETURN VALUE
function log(message: string | number): void {
    console.log(message)
}
// console.log(log(3))

// INTERFACES - CUSTOM TYPE/SPECIFIC ORDER TO OBJECT/FUNCTION
interface UserInterface {
    readonly id: number /* cannot be reassigned*/
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 6, 
    name: 'Tumi Sempe'
}

// INTERFACE WITH A FUNCTION
interface MathFunction {
    (x: number, y: number) : number 
}

const add: MathFunction = (x: number, y: number): number => x + y
const subtract: MathFunction = (x: number, y: number): number => x - y

// IMPLEMENT INTERFACE TO CLASS
interface PersonInterface {
    id: number 
    name: string
    register(): string 
}

// CLASSES 
class Person implements PersonInterface {
    id: number 
    name: string
    // CONSTRUCTOR METHOD CALLED WHEN NEW PERSON CLASS INSTANTIATED
    constructor(id: number, name: string) {
        // ASSIGN PASSED IN PARAMS TO THE CLASS PROPERTIES
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const boitumelo = new Person(1, 'Tumi');
const steve = new Person(2, 'Shakes');
console.log(boitumelo.register());