const coding = ["js","ruby","java","python","cpp"] 
// coding.forEach( (item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.foreach(printme)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arrconst 

const mycoding = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: " py"
    }
]
mycoding.forEach((item) => {
    console.log(item.languagefilename);
})