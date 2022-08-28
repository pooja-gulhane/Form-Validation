const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});
 function checkInputs(){
    //get the values from the input
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();

    if(usernamevalue == ''){
        //show error
        //add error class
        setErrorFor(username,"Username cannot be blank");
    }else{
        //add success class
        setSuccessFor(username);
    }

    if(emailvalue == ''){
        setErrorFor(email,"Email cannot be blank");
    }else if(!isemail(emailvalue)){
        setErrorFor(email,"Email is Invalid");
    }else{
        setSuccessFor(email);
    }

    if(passwordvalue == '')
    {
        setErrorFor(password,"Password cannot be blank");
    }else{
        setSuccessFor(password);
    }

    if(password2value == '')
    {
        setErrorFor(password2,"Confirm-Password cannot be blank");
    }else if(passwordvalue !== password2value){
        setErrorFor(password2,"Password does not match");
    }
    else{
        setSuccessFor(password2);
    }
 }

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //Error msg inside small
    small.innerText = message;

    //add the error class
    formControl.className = 'form-control error'; 
}

function setSuccessFor(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isemail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

