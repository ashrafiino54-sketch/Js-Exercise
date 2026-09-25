// advanced forma validation
const registrationForm = document.querySelector("#registrationForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const error = document.querySelector("#error");
const success = document.querySelector("#success");


registrationForm.addEventListener('submit', function(event){
    event.preventDefault();
    error.textContent = ""
    success.textContent = ""

    const isUsenameValidate = validationUserName();
    const isEmailValid = isvalidateEmail();
    const ispasswordlValid = isPasswordValid();
    const isconfirmPassword = isCorfimPasswordValidate();


    

    if(!isUsenameValidate){
        username.focus()
        return
    }else if(!isEmailValid){
        email.focus();
        return false;
    } else if(!ispasswordlValid){
        password.focus();
        return;
    } else if(!isconfirmPassword){
        confirmPassword.focus();
        return ;
    }

    success.textContent = "Successfully regestered"

})
 
function validationUserName(){
    if (username.value.trim() === '') {
        // error
        setError(username, 'username is required')
        return false
        
    } else {
        // success
        setSuccess(username)
        return true
    }
}

    // VALIDATION EMAIL
function isvalidateEmail() {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;    
        if (!email.value.match(emailPattern)) {
        setError(email, 'Please enter a valid email address.');
        return false;
    } else {
        setSuccess(email);
        return true;
    }
}

function isPasswordValid (){
    if(password.value.length < 8){
        setError(password , "password mustbe lessthn 8 character")
        return false
    } else{
        setSuccess(password)
        return true;
    }
}

function isCorfimPasswordValidate (){
    if(password.value.trim()=== "" || confirmPassword.value.trim() === ""){
        setError(confirmPassword, "the corfim password doest macht the passord")
        return false
    }

    if(password.value !==confirmPassword.value){
        setError (confirmPassword, "the corfim password doest macht the passord")
        return false;
    } else{
        setSuccess(confirmPassword)
        return true;
    }
}

// ERROR

function setError(element, message){
    element.classList.add("valid")
    element.classList.remove("invalid")
    error.textContent = message;
}
function setSuccess(element){
    element.classList.add("invalid")
    element.classList.remove("valid")
}





