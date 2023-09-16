const btn_login = document.getElementById("btn-login");
const btn_signup = document.getElementById("btn-signup");
const tittle = document.getElementById("form-tittle");

btn_login.onclick = function(){
    const login = document.getElementById("login");
    login.setAttribute("class", "visible");
    const signup = document.getElementById("signup");
    signup.setAttribute("class", "hidden");
    btn_login.setAttribute("class", "btn btn-login");
    btn_signup.setAttribute("class", "btn btn-signup");
    tittle.innerText = "Login Form";
}

btn_signup.onclick = function(){
    const login = document.getElementById("login");
    login.setAttribute("class", "hidden");
    const signup = document.getElementById("signup");
    signup.setAttribute("class", "visible");
    btn_login.setAttribute("class", "btn btn-signup");
    btn_signup.setAttribute("class", "btn btn-login");
    tittle.innerText = "Signup Form";
}

