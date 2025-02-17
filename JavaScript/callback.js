/*
function SJITCollege(message,abc){
    console.log(message);
    abc()
}
function callbackSJIT(){
    console.log("Welcome back to SJIT");
}
SJITCollege("Welcome to SJIT",callbackSJIT)
*/

function formSubmission(message,cbFun){
    if(cbFun())
        console.log(message)
    else{
        console.log("Form Submission Unsuccessful")
    }
}

function formValidation(){
    console.log("Form Validation Successful");
}
formSubmission("Form Submitted Successfully",formValidation);