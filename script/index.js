const loginButton = document.querySelector(".login-button")
const signupButton = document.querySelector(".signup-button")
const login = document.querySelector(".login")
const signup = document.querySelector(".signup")
const loginSubmitButton = document.querySelector(".login-submit-button")

const loginForm = document.querySelector('#index-page-login-form')
const signupForm = document.querySelector('#index-page-signup-form')

const loginEmail = document.querySelector('#login-email')
const loginPassword = document.querySelector('#login-password')
const signupEmail = document.querySelector('#signup-email')
const signupPassword = document.querySelector('#signup-password')
const signupConfirmPassword = document.querySelector('#signup-confirm-password')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let isTrue = validateFormLogin()
    if (isTrue) {
        redirect()
    }
})
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let isTrue = validateFormSignup()
    if (isTrue) {
        redirect()
    }
})

function validateFormSignup() {
    const signupEmailValue = signupEmail.value.trim()
    const signupPasswordValue = signupPassword.value.trim()
    const signupConfirmPasswordValue = signupConfirmPassword.value.trim()
    isTrue = true
    if (signupEmailValue === '') {
        setError(signupEmail)
        isTrue = false
    } else {
        noError(signupEmail)
    }
    if (isEmail(signupEmailValue) !== true) {
        setError(signupEmail)
        isTrue = false
    } else {
        noError(signupEmail)
    }
    if (signupPasswordValue === "") {
        setError(signupPassword)
        isTrue = false
    } else {
        noError(signupPassword)
    }
    if (signupPasswordValue !== signupConfirmPasswordValue) {
        signupPassword.classList.remove('no-error')
        setError(signupPassword)
        setError(signupConfirmPassword)
        isTrue = false
    }

    return isTrue
}


function validateFormLogin() {
    const loginEmailValue = loginEmail.value.trim()
    const loginPasswordValue = loginPassword.value.trim()
    isTrue = true
    if (loginEmailValue === '') {
        setError(loginEmail)
        isTrue = false
    } else {
        noError(loginEmail)
    }
    if (isEmail(loginEmailValue) !== true) {
        setError(loginEmail)
        isTrue = false
    } else {
        noError(loginEmail)
    }
    if (loginPasswordValue === "") {
        setError(loginPassword)
        isTrue = false
    } else {
        noError(loginPassword)
    }

    return isTrue
}


function redirect() {
    window.location = "./pricing.html"
}

window.addEventListener('click', () => {
    loginEmail.classList.remove('set-error')
    loginPassword.classList.remove('set-error')
    signupEmail.classList.remove('set-error')
    signupPassword.classList.remove('set-error')
    signupConfirmPassword.classList.remove('set-error')
    loginEmail.classList.remove('no-error')
    loginPassword.classList.remove('no-error')
    signupEmail.classList.remove('no-error')
    signupPassword.classList.remove('no-error')
    signupConfirmPassword.classList.remove('no-error')
})

function setError(input) {
    input.classList.add('set-error')
}
function noError(input) {
    input.classList.add('no-error')
}



// loginSubmitButton.addEventListener("click", () => {
//     window.location = "./pricing.html";
// });

loginButton.addEventListener("click", () => {
    login.classList.remove("hidden")
    signup.classList.add("hidden")
    loginButton.classList.add("active-border")
    signupButton.classList.remove("active-border")
})
signupButton.addEventListener("click", () => {
    login.classList.add("hidden")
    signup.classList.remove("hidden")
    loginButton.classList.remove("active-border")
    signupButton.classList.add("active-border")
})

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}


