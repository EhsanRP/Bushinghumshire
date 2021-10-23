//Event Listeners
const profileBadge = document.getElementById('profileBadge')
const changePasswordBTN = document.getElementById('changePassword')
const passwordModalCloseBTN = document.getElementById('passwordModalClose')
const editProfileBTN = document.getElementById('editProfileBTN')
const editProfileCloseBTN = document.getElementById('closeEditProfileModal')

//Event Targets
const profileDetailsModal = document.getElementById('profileDetailsModal')
const passwordModal = document.getElementById('passwordModal')
const editProfile = document.getElementById('editProfileModal')

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

passwordModalCloseBTN.addEventListener('click',ClosePasswordModal)

function ClosePasswordModal(){
    passwordModal.classList.toggle('visible-custom')
}

//Edit Profile Logic Here
editProfileBTN.addEventListener('click',OpenProfileModal)
function OpenProfileModal(){
    DetailsOpener()
    editProfile.classList.toggle('visible-custom')
}

editProfileCloseBTN.addEventListener('click',closeEditProfileModal)
function closeEditProfileModal() {
    editProfile.classList.toggle('visible-custom')
}

