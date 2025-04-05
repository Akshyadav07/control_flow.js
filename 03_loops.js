const coding = ["js","py","ruby","cpp","js"]
coding.forEach(function (item) {
    console.log(item);
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  2nd method 

coding.forEach( (item) => {
    console.log(item);
    
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 2nd method

coding.forEach((item , index , value) => {
    console.log(item, index, value);
})

const mycoding = [
    {
        languageName : "java",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py" 
    },
    {
        languageName : "java",
        languageFileName : "java" 
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
} )