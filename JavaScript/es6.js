// variables - refer to declaration.js
// Arrow Function
var arrowFunc = () => {
    console.log("This is a test Arrow Function");
}
arrowFunc();

//3. Scoping

var a=10
console.log(a);
//Scoping starts
{
    let a=20;
    console.log(a);
    let b=30;
    console.log(b);
    let c=40;
    console.log(c);
    var e=50;
    console.log(e);
    a=30;
    console.log(a);
}
console.log(a);
console.log(e);