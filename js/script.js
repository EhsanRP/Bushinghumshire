const modalOpener = document.getElementById('modalOpener')
const modalCloseBTN = document.getElementById('modalClose')
const showPasswordBTN = document.getElementById('showPassword')

const modal = document.getElementById('modal')
const passwordBox = document.getElementById('passwordBox')

if (showPasswordBTN != null) {
    showPasswordBTN.addEventListener('click', showPassword)
}

if (modalOpener != null) {
    modalOpener.addEventListener('click', modalOpen)
}

modalCloseBTN.addEventListener('click', modalClose)

function modalOpen() {
    modal.classList.toggle('visible-custom')
}

function modalClose() {
    modal.classList.remove('visible-custom')
}

function showPassword(){
    console.log(passwordBox.attributes["type"].value )
    if (passwordBox.attributes["type"].value === 'text'){
        passwordBox.attributes["type"].value = 'password'
    }
    else if(passwordBox.attributes["type"].value === 'password'){
        passwordBox.attributes["type"].value = 'text'
    }
}