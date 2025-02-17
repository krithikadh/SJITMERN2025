// variables - refer declaratiom.js to se variables 

//arrow function
/*var testarrowfunction= () =>
{
    console.log("this is test arrow function")
}
testarrowfunction()

 
function testfunction()
{
   console.log("hi")
}
testfunction()

//3.scoping

var a=10
console.log(a)

//scoping starts

{
    a=20
    console.log(a)//20
    const b=30
    console.log(b) //30
    let c=40
    console.log(c)//40
    var e=50
    console.log(e)//50
    a=30
    console.log(a) //30

}
console.log(a)//10
console.log(e)//50
console.log(b)
*/

//4. Ternary operator
/*
a=10
console.log((a%2)?"Odd":"Even");
*/

//5. Spread Operator(...)
/*stud1year=["user1","user2","user3"]
stud2year=["user4","user5","user6"]
stud3year=["user7","user8","user9"]
stud4year=["user10","user11","user12"]
studDB=[...stud1year,...stud2year,...stud3year,...stud4year]
console.log(studDB);
//alumniDB=stud4year
//console.log(alumniDB);

//6. Rest Operator(...)

function studentDB(...studDataBase){
    console.log(studDataBase);
}
studentDB(studDB)
*/
/*
//7. Destructing Operator
var array=[10,20,30,40,50]
var[a,b,c,d,e,f]=array
console.log(a,b,f);
*/

//8. Hoisting
/*
//1. variable hoisting
console.log(b);
const a=10;
console.log(a);
*/

//2. functional hoisting
/*
funHoisting()
//function funHoisting(){
//    console.log("Checking Functional Hoisting");
//}

funHoisting = () =>{
    console.log("Checking Functional Hoisting");
}
*/

//9. class and object

class ClassEg{
    classFun(){
        console.log("Hello Function from class");
        return 1;
    }
}

console.log(new ClassEg().classFun());