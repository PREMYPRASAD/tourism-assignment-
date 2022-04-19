let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let error = document.getElementById("error");
let pwerror = document.getElementById("pwerror");
// let passwordStrength = document.getElementById("progress-strength");
var strength = document.getElementById("progress-strength");
const togglePassword = document.querySelector('#togglePassword');


function validemail() {

    var Regexp = /^[^\W_](?:[\w.]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/;

    if (Regexp.test(inputEmail.value) && inputEmail.value != "") {
        //  alert("Invalid Email");
        inputEmail.style.border = "2px solid green";
        error.innerHTML = "";
        // inputEmail.style.backgroundColor ="green";
        return true;


    } else {
        inputEmail.style.border = "2px solid red";
        error.innerHTML = "Invalid Email";
        error.style.color = "red";
        return false;
    }
}
var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

function pass() {
    if (pwd.test(inputPassword.value.trim()) && inputPassword.value.trim() != "") {
        inputPassword.style.border = "2px solid green";
        pwerror.innerHTML = "";
        return true;
    } else {
        inputPassword.style.border = "1px solid red ";
        pwerror.innerHTML = "Incorrect Password";
        pwerror.style.color = "red";
        return false;
    }
}



togglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPassword.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});


function validate() {

    if (validemail() && pass()) {

        return true;
    } else {
        return false;
    }

}