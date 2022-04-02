let loginButton = document.querySelector('.login-button')
let signupButton = document.querySelector('.signup-button')
let login = document.querySelector('.login')
let signup = document.querySelector('.signup')
let loginSubmitButton = document.querySelector('.login-submit-button')

loginButton.addEventListener('click', () => {
    login.classList.remove('hidden')
    signup.classList.add('hidden')
    loginButton.classList.add('active-border')
    signupButton.classList.remove('active-border')
})
signupButton.addEventListener('click', () => {
    login.classList.add('hidden')
    signup.classList.remove('hidden')
    loginButton.classList.remove('active-border')
    signupButton.classList.add('active-border')
})
loginSubmitButton.addEventListener('click', () => {
    window.location = 'http://localhost:3000/pricing.html'
})