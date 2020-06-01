let word1 = "Christian";
let word2 = "Bailon";
let num1 = 2;
let num2 =3;

//old method
//const fullName = word1 + " " + word2;

//ANCHOR using template literals
    // const fullName = `${word1} ${word2}`;
    // const fullName = `${num1 + num2} ${word1}`

    // console.log(fullName);

    // using multi-line code the old way
    // let example = 'Hello \n' + 'World';
    // console.log(example);
    // document.getElementById("example").innerText = example;

//ANCHOR Destructuring Objects
    const personalInformation = {
        firstName: 'Dylan',
        lastName: 'Israel',
        city: 'Austin',
        state: 'Texas',
        zipCode: 73301
    };

    //approach 1
    //const {firstName, lastName} = personalInformation;
    //console.log(`${firstName} ${lastName}`)

    //approach 2
    const {firstName: fn, lastName: ln} = personalInformation
    console.log(`${fn} ${ln}`);

//ANCHOR Destructuring Arrays
    //let names = ['Dylan', 'Coding God', 'Israel'];
    // let {firstName, middleName, lastName} = ['Dylan', 'Coding God', 'Israel'];
    // lastName = "Bailon"
    // console.log(lastName)

//ANCHOR Object Literal
    // function addressMaker(city, state) {
    //     //const newAddress = {newCity: city, newState: state}
    //     const newAddress = {city, state}
    //     console.log(newAddress)
    // }

    // addressMaker('Austin', 'Texas');

//ANCHOR Object Literal Challenge
    // function addressMaker(address) {
    //     const newAddress = {
    //         city: address.city,
    //         state: address.state,
    //         country: 'United States'
    //     };
        
    // }

    addressMaker({city: 'Austin', state: 'Texas'});