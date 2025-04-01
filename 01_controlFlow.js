//  if
//   < , > , <= , >= , == , ===( triple = is use for type checking ) , != , !==


const isUserLoogedIn = true 
const temperature = 41

if (temperature === 41) {
    console.log("temperature is ok");   
} else {
    console.log("temperature is less than 50 %");
}

console.log("execute");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const score = 400 

if (score > 100) {
    const power = "ka me ha me ha"
    console.log(`USER POWER : ${power}`);   
}
console.log(`USER POWER : ${power}`); //this will not execute there because scope execution is done under score 

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const balance = 20
if (balance > 500) console.log("test");
if (balance < 500){
    console.log("less than");
} else if (balance < 750){
    console.log("some is less");
} else if (balance < 900){
    console.log("till less than 1000");
} else {
    console.log("more");  
}

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitcard){
    console.log("allow user for shopping");
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("login the user");   
}

// ++++++++++++++++++++++++++++++++++++ SWITCH CASE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// switch (key) {
//     case value :
//         condition
//                 br;
//     default:
//         condition
//            br;
// }

const month = 3
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("dec");
        break;
}