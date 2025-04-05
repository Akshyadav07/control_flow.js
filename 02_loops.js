// for of

const arr = [ 1, 2, 3, 4, 5]
for (const v of arr){
    console.log(v);    
}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);    
}

//    Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED NATION")
map.set('SF',"SOUTH AFRICA")
map.set('fr',"france")
console.log(map);


for (const [key, value] of map) {
    console.log(key,':-', value);
}

// const myobject = {
//     'game':'NFS',
//     'game2':'spiderman'
// }
// for (const [key, value] of myobject) {
//     console.log(key ,':-', value);
    
// }  object is not declare like as map

const myobject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for (const key in myobject) {
    console.log(`${key} shortcut for ${myobject[key]}`);
    
}

const programing = ["js","cpp","py","rb","java"]
for (const key in programing) {
    console.log(programing[key]);   
}

