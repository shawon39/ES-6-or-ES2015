
// 1. let And Const
//---------------------------------------------------
//---------------------------------------------------



const name = 'Shawon'; // Can't be changed
let age = 23; // Can be changed

console.log(name);
console.log(age);

age = 67;
console.log(age);

// ES-5
// function testing(test) {
//     if(test) {
//         var firstname = 'Shawon';
//         var age = 23;
//     }
//     console.log(firstname + " " + age);
// }
// testing(true);

// ES-6
function testing(test) {
    if(test) {
        let firstname = 'Shawon';
        const age = 23;
        console.log(firstname + " " + age); // Worked
        // Because in ES-6 variable are blocked scope.
        // So inside of block it Works.
    }
    //console.log(firstname + " " + age);
    // So outside of block it#doesn't Works.
}
testing(true);

let i = 23;

for(let i=0; i<5; i++) {
    console.log(i);
}

console.log(i); // doesn't change the value of i
// beacuase of blocked scope












// 2. BLOCKS AND IIFES
//---------------------------------------------------
//---------------------------------------------------



// ES-6 ( very simple and easy )
{
    let a = 1;
    var b = 6;
}
//console.log(a); // not worked because of ES-6 is blocked scope
console.log(b); // Worked !

// ES-5

// (function() {
//     var a = 5;
// })();













// 3. String in ES-6 (Template String)
//---------------------------------------------------
//---------------------------------------------------



let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth +
//             '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');


// ES-6
console.log(`This is ${firstName} ${lastName}. He was bord in ${yearOfBirth}.
Today, he is ${calcAge(yearOfBirth)} yaers old.`);

// Some new features in Es-6

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));














// 4. Arrow Function: part -1
//---------------------------------------------------
//---------------------------------------------------



const years = [1990, 1965, 1982, 1937];

// ES5
// var ages5 = years.map(function(el) {
//     return 2016 - el;
// });
// console.log(ages5);

// ES-6

//for one elemenst
let ages666 = years.map(el => 2018-el);
console.log(ages666);

// for two elements
let ages6 = years.map((elements, index) => `Index: ${index+1} & Age: ${2018-elements}`);
console.log(ages6);

// once more lines
let ages = years.map(el => {
    return 2016-el;
});

console.log(ages);














// 5. Arrow Function: part - 2
//---------------------------------------------------
//---------------------------------------------------



function Person(name) {
    this.name = name;
}
var friends = ['Bob', 'Jane', 'Mark'];

// ES5
// Person.prototype.myFriends5 = function(friends) {
//
//     var arr = friends.map(function(el) {
//        return this.name + ' is friends with ' + el;
//     }.bind(this));
//
//     console.log(arr);
// }
//
// new Person('John').myFriends5(friends);

// ES-6

Person.prototype.myFriends6 = function(friends) {
    let arr = friends.map((el) => {
        return `${this.name} is friends of ${el}.`
    });
    console.log(arr);
}

new Person('Shawon').myFriends6(friends);













// 6 - Destructuring
//---------------------------------------------------
//---------------------------------------------------



// ES-5
// var john = ['john', 25];
// var name5 = john[0];
// var age5 = john[1];

// ES-6

const [name, age] = ['Shawon', 23];
console.log(name);
console.log(age);

const obj = {
    firstName: 'Shakhawat',
    lastName: 'Shawon'
};

const {firstName, lastName} = obj;
console.log(`${firstName} ${lastName}`);

const {firstName: a, lastName: b} = obj;
console.log(`${firstName} ${lastName}`);

// Another Example

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65];
}

const [age2, retirement] = calcAgeRetirement(1995);

console.log(age2);
console.log(retirement);














// 7. Arrays
//---------------------------------------------------
//---------------------------------------------------



const boxes = document.querySelectorAll('.box');

//ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach((cur) => {
    cur.style.backgroundColor = 'red';
});
//or
Array.from(boxes).forEach((cur) => {
    cur.style.backgroundColor = 'red';
});


//ES5
// for(var i = 0; i < boxesArr5.length; i++) {
//
//     if(boxesArr5[i].className === 'box blue') {
//         continue;
//     }
//
//     boxesArr5[i].textContent = 'I changed to blue!';
//
// }

// ES-6
for( const cur of boxesArr6 ) {
    if(cur.className.includes === 'box blue') {
        continue;
    }

    cur.textContent = 'I changed to blue!';
}



//ES5
// var ages = [12, 17, 8, 21, 14, 11];
//
// var full = ages.map(function(cur) {
//     return cur >= 18;
// });
// console.log(full);
//
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);



// ES-6
let ages = [12, 17, 8, 21, 14, 11];

let x = ages.findIndex(cur => cur >= 18);
console.log(x);

let y = ages.find(cur => cur >= 18);
console.log(y);

let z = ages.find(cur => {
    return cur >= 18;
});
console.log(z);














// 8. Spread operator
//---------------------------------------------------
//---------------------------------------------------


function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

//ES5
// var ages = [18, 30, 12, 21, 34];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familyShawon = ['SHawon', 'Sijan', 'Nilufa', 'Saidul', 'Annur'];
const familyJebin = ['Ammu', 'Jebin'];

const bigFamily = [...familyShawon, 'Rafa', ...familyJebin];
console.log(bigFamily);



const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');














// 9. Rest Parameters
//---------------------------------------------------
//---------------------------------------------------



//ES5
// function isFullAge5() {
//     //console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//
//     argsArr.forEach(function(cur) {
//         console.log((2016 - cur) >= 18);
//     })
// }
//
// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);



// ES-6
function isFullAge6(...years) {
    //console.log(years);
    years.forEach((cur) => {
        console.log(2016-cur >= 18);
    });
}

isFullAge6(1994,1999,1974,1934, 2015);


function isFullAge6(limit, ...years) {
    //console.log(years);
    years.forEach((cur) => {
        console.log(2016-cur >= limit);
    });
}

isFullAge6(18, 1994,1999,1974,1934, 2015);

// Akhne limit amra set kore dichi. ata js er new features.
// first argument tai limit er kaj kore













// 10. Default parameters
//---------------------------------------------------
//---------------------------------------------------


//ES-5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//
//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'american' : nationality = nationality;
//
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }



// Es-6
function SmithPerson(firstName, yearOfBirth, lastName = "Smith",
    nationality = "american") {

        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.nationality = nationality;
    }


var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

console.log("Start.................\n ");
console.log(john);
console.log();
console.log(emily);













// 10. Maps
//---------------------------------------------------
//---------------------------------------------------



const q = new Map();
q.set('question', 'What is your favaurite language ?');
q.set(1, 'C');
q.set(2, 'Java');
q.set(3, 'JavaScript');
q.set(4, 'Python');
q.set('correct', 3);
q.set(true, 'Correct Answer!');
q.set(false, 'Wrong Answer. Try Again');

console.log( q.get('question') );
console.log( q.size );
console.log(q.get('correct'));

q.delete(1);

if( q.has(4) ) {
    // q.delete(4);
    // console.log(q);
    console.log('Ans 4 is here');
}

q.clear();
console.log(q);



///
q.forEach((value, key) => {
    console.log(`This is ${key}, and it's set to ${value}`);
});

for (let [key, value] of q.entries()) {
    console.log(`This is ${key}, and it's set to ${value}`);
}

//
for( let [key, value] of q.entries() ) {
    if(typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// it works for browser not for Node.js
const ans = parseInt(prompt('Write the correct answer'));
console.log( q.get(ans === q.get('correct')) );















// 11. Classes
//---------------------------------------------------
//---------------------------------------------------


// ES-5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
//
// Person5.prototype.calculateAge = function() {
//     var age =  new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }
//
// var Shawon5 = new Person5('Shawon', 1995, 'Programmer');
// Shawon5.calculateAge();
// console.log(Shawon5);


// Es-6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    // static greeting() {
    //     console.log('Hey Shawon');
    // }
}

const shawon6 = new Person6('Shawon', 1995, 'Programmer');
console.log(shawon6);
shawon6.calculateAge();
//Person6.greeting();












// 12. subclasses (inheritance)
//---------------------------------------------------
//---------------------------------------------------

//ES-5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
//
// Person5.prototype.calculateAge = function() {
//     var age =  new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }
//
// var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
//     Person5.call(this, name, yearOfBirth, job);
//     this.olymicGames = olymicGames;
//     this.medals = medals;
// }
//
// Athlete5.prototype = Object.create(Person5.prototype);
//
// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);
// }
//
// var shawonAthlete5 = new Athlete5('Shawon', 1995, 'Swimmer', 3, 10);
// console.log(shawonAthlete5);
// shawonAthlete5.calculateAge();
// shawonAthlete5.wonMedal();


// ES-6


class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olymicGames, medals) {
        super(name, yearOfBirth, job);
        this.olymicGames = olymicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const shawonAthlete6 = new Athlete6('Shawon', 1995, 'Swimmer', 3, 10);
console.log(shawonAthlete6);
shawonAthlete6.calculateAge();
shawonAthlete6.wonMedal();




// THE END
