console.log("Question 1:\n");

function capitalizeFirstLetter(string) {
    return string.split(' ').map(word =>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');}
console.log(capitalizeFirstLetter("hello world")); // "Hello"
console.log(capitalizeFirstLetter("I dont like javaScript or js")); // "I Dont Like Javascript or Js"

console.log("===================================");
console.log("Question 2:\n");

function findlargestNumber(int) {
    return Math.max(...int);}
console.log(findlargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findlargestNumber([-1, -2, -3, -4, -5])); // -1
console.log(findlargestNumber([1000,510,440])); // 1000
console.log("Sample Output form the Lab1.docx file");
console.log(findlargestNumber ([1,0,1])); // 1
console.log(findlargestNumber ([0,-10,-20])); // 0
console.log(findlargestNumber ([1000,510,440])); // 1000


console.log("===================================");

console.log("Question 3:\n");

function swaplastTreeChars(string) {
    if (string.length < 3) {
        return "String length is less than 3";}
    const firstPart = string.slice(0, -3);
    const lastThree = string.slice(-3);
    return lastThree + firstPart ;}
console.log(swaplastTreeChars("Python"));
console.log(swaplastTreeChars("JavaScript"));
console.log(swaplastTreeChars("Hi"));


console.log("===================================");
console.log("Question 4:\n");

function checkAngleType(angle) {
    if (angle <90) {
        return "Acute angle";}
    else if (angle == 90) {
        return "Right angle";}
    else if (angle < 180) {
        return "Obtuse angle";}
        else if (angle ==180) {
            return "Straight angle";}
    else {
        return " Invalid angle value";}}


console.log(checkAngleType(47))
console.log(checkAngleType(90))
console.log(checkAngleType(145))
console.log(checkAngleType(180))


console.log("===================================");
console.log("Question 5:\n");

function array_max_sum(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            
        }





}
console.log(array_max_sum([1, 2, 3, 14, 5], 2)) // 19   
console.log(array_max_sum([2, 3, 5, 1, 6], 3)) //12
console.log(array_max_sum([9, 3, 5, 1, 7], 2)) //12
