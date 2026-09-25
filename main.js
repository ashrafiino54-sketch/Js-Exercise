// let FistName = "Abdinasir";
// let LastName = "Maclin";

// console.log(FistName + " " + LastName);

// let greeting = "Seetahay";

// console.log(greeting);

// greeting += FistName;


// function

// function greet(name){
//     console.log('hello'+ name);
// }

// greet("abdinasir");

// const changeColor = document.querySelector("#color");
// const selectedColor = document.querySelector("#selectedColor");

// changeColor.addEventListener("change", function(){
//     selectedColor.textContent = 'seclected color:' + changeColor.value;
// });


// const username = document.querySelector("#username");
// const curentName = document.querySelector("#curentName");

// username.addEventListener('change', function(){
//     curentName.textContent = "Current Name is" + username.value;
// })




// preventing default action
// const form = document.querySelector("#Myform");
// const nameInput = document.querySelector("#name");
// const message = document.querySelector("#ForMessege");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     message.textContent = "form submission";

// });


// advanced forma validation


const regedtrationform = document.querySelector("#registrationForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const error = document.querySelector("#error");
const success = document.querySelector("#success");


form.addEventListener('submit', function(event){
    event.preventDefault();
    const isUsenameValidate = validationUserName()


})

function validationUserName(){
    if (username.value === '') {
        // error
        seteError(username, 'username is required')
        return false
    } else {
        // success
        seteError(username)
        return true
    }
}

function seteError(element, message){
    element.classList.add(".valid")
}

function setSuccess(element){
    element.classList.add(".invalid")
}





