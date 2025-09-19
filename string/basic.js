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

