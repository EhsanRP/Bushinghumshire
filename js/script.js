//Buttons
const forgotPasswordBTN = document.getElementById('forgotPasswordBTN')
const modalCloseBTN = document.getElementById('modalClose')
const loginSubmit = document.getElementById('loginSubmit')

//Elements
const modal = document.getElementById('modal')
const formItem = document.getElementById('loginCredential')
const forgotPasswordModal = document.getElementById('forgotPasswordModal')
const forgotPasswordModalCloseBTN = document.getElementById('forgotPasswordModalCloseBTN')

if (forgotPasswordBTN != null) {
    forgotPasswordBTN.addEventListener('click', forgotPasswordModalOpen)
}

if (forgotPasswordModalCloseBTN != null) {
    forgotPasswordModalCloseBTN.addEventListener('click', forgotPasswordModalClose)
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

function forgotPasswordModalOpen() {
    forgotPasswordModal.classList.toggle('visible-custom')
}

function forgotPasswordModalClose(btn) {
    forgotPasswordModal.classList.remove('visible-custom')
    if (btn){
        window.location.href = window.location.href.replace('password','resetpassword')
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

