const modalOpener = document.getElementById('modalOpener')

const modal = document.getElementById('modal')
const modalCloseBTN = document.getElementById('modalClose')

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