//Buttons
const modalOpener = document.getElementById('modalOpener')
const modalCloseBTN = document.getElementById('modalClose')
const showPasswordBTN = document.getElementById('showPassword')
const loginSubmit = document.getElementById('loginSubmit')


//Elements
const modal = document.getElementById('modal')
const passwordBox = document.getElementById('passwordBox')
const formItem = document.getElementById('loginCredential')


//Button Null Checks and Event Listeners
if (showPasswordBTN != null) {
    showPasswordBTN.addEventListener('click', showPassword)
}

if (modalOpener != null) {
    modalOpener.addEventListener('click', modalOpen)
}

if (modalCloseBTN != null) {
    modalCloseBTN.addEventListener('click', modalClose)
}

if (loginSubmit != null) {
    loginSubmit.addEventListener('click', formCheck)
}


//Event Functions
function modalOpen() {
    modal.classList.toggle('visible-custom')
}

function modalClose() {
    modal.classList.remove('visible-custom')
}

function showPassword() {
    console.log(passwordBox.attributes["type"].value)
    if (passwordBox.attributes["type"].value === 'text') {
        passwordBox.attributes["type"].value = 'password'
    } else if (passwordBox.attributes["type"].value === 'password') {
        passwordBox.attributes["type"].value = 'text'
    }
}

function formCheck() {
    if (!formItem.value) {
        modalOpen()
    } else if (loginSubmit.attributes['aria-describedby'].value === 'index') {

        if (window.location.href.includes('index')){
            window.location.href = window.location.href.replace('index','password')
        }else {
            if (window.location.href.endsWith('#')){
                window.location.href = window.location.href.replace('#','password.html')
            }else {
                window.location.href = window.location.href.append('password.html')
            }
        }

    } else if (window.location.href.includes("password")) {
        window.location.href = window.location.href.replace('password', 'dashboard')

    }
}