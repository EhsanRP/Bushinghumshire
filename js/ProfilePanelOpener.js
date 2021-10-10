const profileBadge = document.getElementById('profileBadge')
const profileDetailsModal = document.getElementById('profileDetailsModal')


profileBadge.addEventListener('click' ,DetailsOpener)

function DetailsOpener() {
    if (profileDetailsModal.style.opacity === '0'){
        profileDetailsModal.style.opacity = '1'
        profileDetailsModal.style.zIndex = '100'
    }
    else {
        profileDetailsModal.style.opacity = '0'
        profileDetailsModal.style.zIndex = '-100'
    }
}