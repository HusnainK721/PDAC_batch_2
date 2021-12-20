const findData=(str,subStr)=>{
    const arrStr = str.split(" ")
    return arrStr.indexOf(subStr) !== -1
}               
console.log(findData("i am indian", "indian"))