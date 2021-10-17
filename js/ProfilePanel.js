//Event Listeners
const profileBadge = document.getElementById('profileBadge')
const changePasswordBTN = document.getElementById('changePassword')
const passwordModalCloseBTN = document.getElementById('passwordModalClose')

//Event Targets
const profileDetailsModal = document.getElementById('profileDetailsModal')
const passwordModal = document.getElementById('passwordModal')

//Profile Panel Logic Here
profileBadge.addEventListener('click' ,DetailsOpener)
function DetailsOpener() {
    console.log(profileBadge)
    if (profileDetailsModal.style.opacity === '1'){
        profileDetailsModal.style.opacity = '0'
        profileDetailsModal.style.zIndex = '-100'
    }
    else {
        profileDetailsModal.style.opacity = '1'
        profileDetailsModal.style.zIndex = '100'
    }
}

//Password Change Modal Logic Here
changePasswordBTN.addEventListener('click',function (){
    DetailsOpener()
    passwordModal.classList.toggle('visible-custom')
})

passwordModalCloseBTN.addEventListener('click',closePasswordModal)

function closePasswordModal(){
    passwordModal.classList.toggle('visible-custom')
}
