// type of operator
 /* 1.assignment operator
   2. arithmetic operator
   3. logical operator
   4. relational/conditional operator
   5.bitwise operator
   6. unary operator*/
   
   //Assignment operator
var a=3
var b=10
console.log(a)
console.log(b)
//arithmetic operator
var a=30
var b=10
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
//assignment operator
var c=10
var d=5
c+=d
console.log(c)
c-=d
console.log(c)
c*=d
console.log(c)
c/=d
console.log(c)
c%=d
console.log(c)
   
function multipy(p1, p2) {
    return p1 * p2;
}
console.log(multipy(4, 3))
//funtion to add
function addition(a, b) {
    return a + b;
}
    
console.log(addition(4, 3)); // Output: 7
    
//funtion to subract
function subract(a,b) {
    return a - b;
}
console.log(subract(4, 3));//1
function division(a,b)
{
    console.log(division(3,1))
}
const obj={
    name:'Krithika',
    age:20,
    dept:"ADS",
    batch:2026
}
for(let[val] of Object.entries(obj))
{
    console.log(obj[val]);
}