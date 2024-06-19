//Variables - Usually use Camel Case
let var1 = true;
const var2 = "Amazing";
let var3 = 3.14;
let var4 = "君が大好きだよ"
/*Want to declare (let or const). After declaration, no need to do full declare again 
(can just use the method for 3rd variable) */



//Arrays (Lists)
let colorArray = ['Blue', 'Red', 'Purple', 'Pink', 'White', 'Black'];
let intArray = [1, 2, 3, 6, 12, 24];
let varArray = [var1, var2, var3, var4];
let mixArray = ['String', 48, 3.14, true, var4];
let arrayArray = [colorArray, intArray, varArray, mixArray];
let dblArray = [1, 1, 'Blue', true, 1, 'Blue', false, true];

//Object Array
let carArray = [
    {type:"Volvo", year:2016},
    {type:"BMW", year:2010},
    {type:"VW", year:2003}
];

//Indexing Arrays and adjusting
let cA2 = colorArray[1]; //takes 2nd index of cA
let aA4 = arrayArray[3]; //takes 4th index of aA
colorArray[1] = "Maroon"; //Changes value of [1] to value

//Conversion, Adtl Indexing, and Length
const arrLen = colorArray.length;
const arrStr = colorArray.toString(); //"Blue,Red,Purple,..."
const arrVal = colorArray.at(2) === colorArray[2]; //.at() allows negative indexing while Array[] does not
const arrStr2 = colorArray.join(", "); //"Blue, Red, ..."

//Adding and Subtracting Values
const arrPop = colorArray.pop(); //Pops Last Element
const arrPush = colorArray.push("Grey"); //Adds to end
const arrShft = colorArray.shift(); //Pops First Element
const Unshft = colorArray.unshift("Sapphire"); //Adds to beginning
colorArray[colorArray.length] = "Brown"; //Easy way to append
delete colorArray[4]; //Leaves an undefined hole
let manyColors = colorArray.copyWithin(4, "Turquois"); //New way to update Arrays

//Concatenation and Flattening
const fullArray = mixArray.concat(colorArray, intArray, varArray);
const newColors = colorArray.concat("Beige"); //Concats similar to .push()
intArray.copyWithin(3, 0); //Changes it to [1,2,3,1,2,3] first number is to (not including) and 2nd number is from (inclusive)
//Overwrites existing values, does not add to the array length
const bigArray = arrayArray.flat(); //Takes the sub-arrays and concatonates to a single array
const bigArr = [...colorArray, ...intArray]; //Expands iterables into more elements (effectively concatenating the arrays)

//Adding and Subtracting from middle of Arrays
colorArray.splice(4, 0, "Green", "Teal");
colorArray.splice(5, 1);
const newCA = colorArray.toSpliced(4, 1); //keeps old array intact and creats new one
//1st parameter defines where to add/subtract (before the index for adding) | 2nd defines how many to remove | 3rd is what to add
const whiteRed = colorArray.slice(3); //Creates a new array and doesn't remove from source array
const purple = colorArray.slice(0, 2); //Starts at first parameter and ends with 2nd (non-inclusive)
//if just 1 parameter, takes values from that point to end

//Finding values in Arrays
let position1 = dblArray.indexOf('Blue', 0); //Can negative index. 2nd parameter is where to start search. Returns -1 if not found
//Only finds the first one when searching
let position2 = dblArray.lastIndexOf('Blue', 0); //Can negative index. 2nd parameter is where to start search. Returns -1 if not found
//Only finds the last one when searching
let included = dblArray.includes('Blue') //True & can check for NaN values

let first1 = intArray.find(ageCheck); //returns the first value that fulfills the function
let first2 = intArray.findIndex(ageCheck); //returns the INDEX of the first value that fulfills the function
let last1 = intArray.findLast(x => x >= 18); //starts from the end and returns the first object that matches
let last2 = intArray.findLastIndex(ageCheck); //starts frin the end and returns the INDEX of the first object that matches

//Sorting and Reversing (specifically the first value check)
let sortColors = colorArray.sort();
let revColors = sortColors.reverse();
//These alter the original array
sortColors = colorArray.toSorted();
revColors = colorArray.toReversed();
//These do not alter the original arrays
sortInt = intArray.sort(function (a, b) { return a - b });
revInt = intArray.sort(function (a, b) { return b - a });
//These use a compare function to sort non-str objects. If result is +, the 1st is sorted first. If = then the 2nd is sorted first
randSort = intArray.sort(function () { return 0.5 - Math.random() });
//Randomly sorts but has a small issue. Look at random below

//Max and Min
minInt = Math.min.apply(null, intArray); //equivalent to Math.min(contents of array)
maxInt = Math.max.apply(null, intArray); //Also equivalent

//Misc
intArray.forEach(ageCheck); //Calls for each array element
let mapArr = intArray.map(doubler); //Creates new array by performing function on each element
let flatMap = intArray.map(doubler); //Maps all elements and then creates new array by flattening it
let adult = intArray.filter(ageCheck); //Creates new array from returned values (in this case >= 18)
let reduct = intArray.reduce(Addition); //Runs the function on each array element to produce a single value
let rreduct = intArray.reduceRight(Subtraction); //Runs from Right to Left instead
let check1 = intArray.every(ageCheck); //False (not every value passes the test)
let check2 = intArray.some(ageCheck); //True (at least 1 value passes the test)

let newArray = Array.from(var4); //Takes the str and turns it into an array
let itArray = colorArray.keys(); //Creates an Iterator object that contains the keys of the array
let entArray = colorArray.entries(); //Creates the Iterator and then returns key value pairs




//Functions
function toTitleCase() {
    word = word.toLowerCase().split(' ');
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    return word.join(' ')
};
const title = toTitleCase(var2);

function ageCheck(value, index, array) {
    return value >= 18;
}

function doubler(value, index, array) {
    return value * 2;
}

function Addition(total, value, index, array) {
    return total + value;
}
function Subtraction(total, value, index, array) { 
    return value - total
}

function myArrayMin(array) {
    let len = array.length;
    let min = Infinity;
    while (len--) {
      if (array[len] < min) {
        min = array[len];
      }
    }
    return min;
}

function myArrayMax(array) {
    let len = array.length;
    let max = -Infinity;
    while (len--) {
      if (array[len] > max) {
        max = array[len];
      }
    }
    return max;
}


//Types of Strings
bktkStr = "Backtick String"

"Double Quotes"

'Single Quotes'

newString = `This is a ${bktkStr}`
`
Also Used for
Multiple Lines
`



//Mathematical Operators
let add = 4 + 2;
let subt = 4 - 2;
let mult = 4 * 2;
let divd = 4 / 2;
let expo = 4 ** 2;
let mod = 4 % 3; //Remainder



//Bools and Equality Ops (in ops order)
// === & !== are stricter and compare type and then value
comp1 = 6 > 3;
comp2 = 6 < 3;
comp3 = 6 >= 3;
comp4 = 6 <= 3;
comp5 = subt == divd;
comp6 = '3' == 3;  //True
comp7 = '3' === 3; //False
comp8 = '3' != 3;  //False
comp9 = '3' !== 3; //True
comp10 = !true;    //False
comp11 = !false;   //True



/* Logics (in ops order)
Bitwise AND : &
Bitwise XOR : ^
Bitwise OR  : |
Logical AND : &&
Logical OR  : ||

Conditionals (?, :, etc)
Assignments (=, +=, -=, etc)
Assignments List [
=, +=, -=, *=, /=, **=, %=,
<<=, >>=, >>>=, &=, ^=, |=
]
*/



//User Inputs
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const r1 = readline.createInterface({ input, output });

r1.question("Is blue your favorite color? ", (answer) => {
    console.log(`Thank you for the answer of: ${answer}`);
    r1.close();
});

let answer = prompt("Please enter your favorite Color: ");
console.log(answer);
//Try not to over use this as it prevents users from interacting
//with the rest of the page until the prompt is resolved
// prompt(text (printed), default input text)



/* Order of Ops
(x)             : parentheses
x++ | x--       : Postfix Ops
++x | --x       : Prefix Ops
!x/~x | +x/-x   : Prefix Ops (cont)
x**y            : Exponents
x*y | x/y | x%y : Mult/Div ops
x+y | x-y       : Add/Sub ops
*/



//String Methods (hundreds of others - mostly same as arrays)
const len = var2.length;
const cap = var2.toUpperCase();
const uncap = var2.toLowerCase();
const ends = var4.endsWith('.') //False



//Str Access
const strCha = var2[2];



//Conditionals (ensure that ';' goes after last in block not every block)
//Simple
if (len > 10) {
    console.log(`${len} > 10`);
}
else if (len <= 5) {
    console.log(`${len} <= 5`)
}
else {
    console.log(`${len} is NOT > 10 OR <=5 `)
};

//Advanced (For single lines only)
if (len > 10) 
    console.log("True");

if (len != 8) console.log("True");

//Complex
if (comp6 && comp7) {
    console.log(True)
} else if (add === 6 || mult === 8 || expo == '16') {
    console.log('Multiples of 2: True')
} else {
    console.log("The rest are false")
};
//Used to 'switch' between options and uses === strict comp
switch (new Date(getDay())) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    //default defines what to do if not included and thus will not run here
    default:
        text = "Looking forward to an 8th day"
        //must add a break if not the last in the list (true for all final options)
};
//Ternary Operator is used similar to an if...else
function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }
console.log(getFee(true));
// Expected output: "$2.00"
console.log(getFee(false));
// Expected output: "$10.00"
console.log(getFee(null));
// Expected output: "$10.00"



//Loops
//For Loop
for (let count = 0; count < 10; count++) {
    console.log(count);
}
//declares count b/f loop (optional & as many as wanted) =>
//while count < 10 (also optional w/ break in loop) =>
//log the results and ++ (also optional)

//Random calls
for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
}

let i = 0;
let carLen = cars.length;
let empty = "";
for (; i < carLen; ) {
  empty += cars[i] + "<br>";
  i++;
}

    //for/in loop
let strChaList = []
for (i in var2) {
    strCha = var2[i];
    strChaList = strChaList.append(strCha);
}

    //for/of loop (not supported in IE, but ok in Edge)
const cars = ["VW", "BMW", "Volvo", "Porsche"];
let text = '';
for (let x of cars) {
    text += x;
}

for (let x of var4) {
    text += x;
    console.log(text)
}
//Prints each character in the string


//While Loop
while (var3 <= 7) {
    console.log(var3);
    var3++;
}
    //Do While Loop
do {
    console.log(var3);
    var3++;
}
while (var3 <= 7);


//Loop Modifiers
//Continue - breaks one iteration of the loop
for (let count = 0; count < 5; count++) {
    if (count === 3) { continue; }
    text += x;
    console.log(text)
} //Skips the value of 3

//Break - breaks out of the loop
for (let x of var4) {
    if (var4 === '') { break; }
    text += x;
    console.log(text)
}
//Can also be used to break lists using the break list;
//or the continue list; syntax (list is the name of the list)



//Printing
console.log(var1);
console.log(var2, var3);
console.log(len);
console.log(title);
console.log(typeof(var1, var2, var3, comp1))
