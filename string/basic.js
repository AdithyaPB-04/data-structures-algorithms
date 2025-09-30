//String in Javascript

let firstName = "Adithyai";

//length of a string
console.log(firstName.length);

//Access string elements
console.log(firstName.charAt(1))
console.log(firstName[1])
console.log(firstName.charCodeAt(1)) //100 this is a ASCII value

//to check whether the string present present in or not
console.log(firstName.includes('i'))
console.log(firstName.includes('adi'))

console.log(firstName.indexOf('i'))   //2
console.log(firstName.indexOf('di')) //1

//internal working of indexOf
//for single element

function findIndex(str,element){
    for(let i=0;i<str.length;i++){
        if(str[i]==element){
            return i
        }
    }
    return -1
}
console.log(findIndex("Adithya","i"))

console.log(firstName.lastIndexOf("i"))

let anotherName = "Adithya"
console.log(firstName.localeCompare(anotherName))
console.log(anotherName.localeCompare(firstName))

//replace "Adithya" with "Sooraj"
const str = "Adithya is Best Backend Developer, Adithya is the best"
console.log(str.replace("Adithya","Sooraj"))
console.log(str.replace("fgfggfe","Sooraj"))

//to replace all 
console.log(str.replaceAll("Adithya","Sooraj"))

console.log(str.replace(/Adithya/g,"Sooraj"))

console.log(str.replace(/Adithya/gi,"Sooraj"))     //case sensitive

/*
Use replaceAll("text", "newText") for simple word/phrase replacements.
Use replace(/pattern/gi, "newText") when you need case-insensitivity or patterns.
*/

console.log(str.substring(6))

//substring of a string
console.log(str.substring(6,20))
console.log(str.slice(6,20))
//slice and substring are almost same but one difference is we can write negative number in slice
console.log(str.slice(-10,-2))

console.log(str.search("Adithya")) //if present result will be 0 if absent result will be -1

console.log(str.split(",")) //it splites into an array of string
console.log(str.split(" ")) 
//to split the character 
console.log(str.split("")) 

const subString = str.split(" ")
console.log(subString.join(" "))

console.log(str.startsWith("Adithya")) //if exists then true if not false
console.log(str.endsWith("Adithya"))

let whiteSpaceString = "                             Adithya is Best Backend Developer,                Adithya is the best"
//to remove space

console.log(whiteSpaceString.trim()) // it remove only extra white space itstarting and ending if there is any white space in between it will not trim

//to remove from start only
console.log(whiteSpaceString.trimStart())

//to remove only end
console.log(whiteSpaceString.trimEnd())
