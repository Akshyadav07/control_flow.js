const userEmail = "akash@yadav.ai"

if(userEmail){
    console.log("Got user Email");    
} else {
    console.log("dont have user Email");    
}

// FALSE VALUE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// FALSE , 0 , -0 , bigInt 0n ,  "" , null , undefined , NaN 

// true value +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  true , "0" , 'false' , " " , [] , {} , function{}()

if (userEmail.length === 0 ) {
    console.log("array is empty");       
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0 ) {
    console.log("obj is empty");
}

// Nullish coalescing operator (??):null unmdefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// terniary operator+++++++++++++++++++++++++++++++++++

// condition ? true : false
const icetea = 100
icetea <= 80 ? console.log("less than 80") : console.log("more than 80");

