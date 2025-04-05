//    iterations    or loops                  '

//  for 
for (let v = 0; v < 10; v++) {
    const element = v;
    if(element == 5){
        // console.log("5 number is printed");
    }
    // console.log(element);
    
}
// console.log(element); there is element is not accessible

for (let v = 0; v < 10; v++) {
    // console.log(`outer loop value: ${v}`);
    for (let a = 0; a < 5; a++) {
        // console.log(`inner loop value: ${a}`);
        for (let b = 0; b < 4; b++) {
            // console.log(`second inner loop value: ${b}`);
            
            
        }
        
        
    }
    
}

let myarray = ["goku","vegeta","picolo"]
console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("detected 5");
        break
    }
    console.log(`value of I is ${index}`);   
}

//  continue    

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("detected 5");
        continue
    }
    console.log(`value of I is ${index}`);   
}
