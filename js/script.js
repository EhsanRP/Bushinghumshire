const modal = document.getElementById('modal')
const forgetLink = document.getElementById('forgotPassword')
const modalClose = document.getElementById('modalClose')

forgetLink.addEventListener('click',function (){
    modal.style.zIndex = "100"
    modal.style.opacity = "1"
})

modalClose.addEventListener('click',function (){
    modal.style.zIndex = "-100"
    modal.style.opacity = "0"
})