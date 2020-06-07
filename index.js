// let word1 = "Christian";
// let word2 = "Bailon";
// let num1 = 2;
// let num2 =3;

//old method
//const fullName = word1 + " " + word2;
//*****************************************************************
//ANCHOR using template literals
    // const fullName = `${word1} ${word2}`;
    // const fullName = `${num1 + num2} ${word1}`

    // console.log(fullName);

    // using multi-line code the old way
    // let example = 'Hello \n' + 'World';
    // console.log(example);
    // document.getElementById("example").innerText = example;
//*****************************************************************
//ANCHOR Destructuring Objects
    // const personalInformation = {
    //     firstName: 'Dylan',
    //     lastName: 'Israel',
    //     city: 'Austin',
    //     state: 'Texas',
    //     zipCode: 73301
    // };

    //approach 1
    //const {firstName, lastName} = personalInformation;
    //console.log(`${firstName} ${lastName}`)

    //approach 2
    // const {firstName: fn, lastName: ln} = personalInformation
    // console.log(`${fn} ${ln}`);
//*****************************************************************
//ANCHOR Destructuring Arrays
    //let names = ['Dylan', 'Coding God', 'Israel'];
    // let {firstName, middleName, lastName} = ['Dylan', 'Coding God', 'Israel'];
    // lastName = "Bailon"
    // console.log(lastName)
//*****************************************************************
//ANCHOR Object Literal
    // function addressMaker(city, state) {
    //     const newAddress = {newCity: city, newState: state}
    //     const newAddress = {city, state}
    //     console.log(newAddress)
    // }

    // addressMaker('Austin', 'Texas');
//*****************************************************************
//ANCHOR Object Literal Challenge

    //old function
    // function addressMaker(address) {
    //     const newAddress = {
    //         city: address.city,
    //         state: address.state,
    //         country: 'United States'
    //     };
        
    // }

    //new function with destructuring
    // function addressMaker(address) {

    //     const {city, state} = address;

    //     const newAddress = {
    //         city,
    //         state,
    //         country: 'United States'
    //     };
    //     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
        
    // }

    // addressMaker({city: 'Austin', state: 'Texas'});
//*****************************************************************
//ANCHOR For of Loop
    //approach 1
    // let incomes =[62000, 67000, 75000];
    // let totals = 0;

    // for (const income of incomes) {
    //     console.log(income);
    //     totals += income;
    // }
    // console.log(totals);

    //approach 2
    // let fullName ="Christian Coding God Bailon";

    // for (const char of fullName) {
    //     console.log(char);

    // }
//*****************************************************************
//ANCHOR For of Loop challenge
    //For of Loops only iterates values not set new values for the iteration
    // let incomes =[62000, 67000, 75000];
    // for (const income of incomes) {
    //     totals += 5000;
    // }
    // console.log(totals);
//*****************************************************************
//ANCHOR Spread Operator
    //using arrays
    // let example1 = [1,2,3,4,5,6];
    // let example2 =[...example1];
    // example2.push(true);
    // console.log(example2);

    //using objects
    // let example1 = {
    //     firstName: "Christian"
    // };
    // let example2 = {
    // firstName: 'N/A'    
    //     ...example1
    // }
    // example2 = {firstName: 'Ian'}
//*****************************************************************
//ANCHOR Rest Operator
    // function add(nums) {
    //     console.log(nums);
    // }
    // add(4);

    // function add(...nums) {
    //     console.log(nums);
    // }
    // add(4,5,6,8);
//*****************************************************************
//ANCHOR Arrow Functions
    //approach 1
    // function add(...nums) {
    //     let total = nums.reduce(function(x,y){
    //         return x + y;
    //     });
    //     console.log(total);
    // }
    // add(4,5,7,8,12);

    //approach 2
    // function add(...nums) {
    //     let total = nums.reduce((x,y) => x + y);
    //     console.log(total);
    // }
    // add(4,5,7,8,12);
//*****************************************************************
//ANCHOR Default Params
    // function add(numArray = []) {
    //     let total = 0;
    //     numArray.forEach((element) => {
    //         total += element;
    //     });
    //     console.log(total);
    // }

    // add();
//*****************************************************************
//ANCHOR includes()
    //not supported in IE
    // let numArray = [1,2,3,4,5];
    // console.log(numArray.includes(2));
//*****************************************************************
//ANCHOR Let and Const
    //variable hoisting - var
    // if(false){
    //     var example = 5;
    // }
    // console.log(example);

    //block scope - let
    // if(false){
    //     let example = 5;
    // }
    // console.log(example);


    //using const
    // const example = 5;
    // example = 10;
    // console.log(example);

    //using const with arrays
    // const example = [];
    // example = 3;
    //example.push(10);
    // console.log(example);

    //using const with objects
    // const example = {};
    // example.firstName = "Christian";
    // console.log(example);
//*****************************************************************
//ANCHOR Import and Export
    // import { data } from './example.js';

    // let updatedData = data;
    // updatedData.push(5);
    // console.log(updatedData);
//*****************************************************************
//ANCHOR padstart() & padEnd()
    // let example = "Christian";

    // console.log(example.padStart(15,"a"));
    // console.log(example.padEnd(15,"a"));
//*****************************************************************
//ANCHOR padstart() & padEnd() challenge
    // let example = "https://github.com/getcoderunning";
    // console.log(example.padStart(100));
    // console.log(example.padEnd(1));
//*****************************************************************
//ANCHOR Classes
    // import {Animal, Cat} from './animal.js';

    // let cat = new Animal("Cat", 4);
    // cat.makeNoise("Meow");
    //console. log(Animal.return10());
    // console.log(cat.legs);

    // let cat = new Cat("Pussy",4);

    // cat.makeNoise();
    // console.log(cat.metadata);
//*****************************************************************
//ANCHOR Trailing Commas
    // function add(param1,) {
    //     const example = {
    //         name: "Christian",
    //     };
    //     console.log(example);
    // }
    // add(3);
//*****************************************************************
//ANCHOR Async and Await
    //const apiUrl = 'https://swapi.dev/api/people/1';

    //common fetch method - promises
    // function getTop100Campers() {
    //     fetch(apiUrl)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             console.log(json[0])
    //         }).catch((error) => {
    //             console.log("Failed");
    //         });
    // }
    
    //using async and await
    // async function getTop100Campers() {
    //     const response = await fetch(apiUrl);
    //     const json = await response.json();

    //     console.log(json[0]);
    // }

    // getTop100Campers();
//*****************************************************************
//ANCHOR Async and Await challenge
    // function resolveAfter3seconds() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve("resolved");
    //         }, 3000);
    //     });
    // }

    // resolveAfter3seconds()
    //     .then((data) => {
    //         console.log(data);
    //     });

    // async function getAsyncData() {
    //     const result = await resolveAfter3seconds();
    //     console.log(result);
    // }

    // getAsyncData();
//*****************************************************************
//ANCHOR ES6 Sets
    const exampleSet = new Set([1,1,1,1,2,2,2,2]);

    exampleSet.add(5);
    exampleSet.add(5).add(17);
    exampleSet.delete(5);
    
    console.log(exampleSet);
    console.log(exampleSet.size);
    console.log(exampleSet.has(1));