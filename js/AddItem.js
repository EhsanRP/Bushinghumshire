//Event Triggers
const closeAddItemBTN = document.getElementById('closeAddItemBTN')
const addItemBTN = document.getElementById('addItemBTN')

//Event Targets
const addItemModal = document.getElementById('addItemModal')

//Event Logics
addItemBTN.addEventListener('click',OpenAddItemModal)
closeAddItemBTN.addEventListener('click',CloseAddItemModal)

function OpenAddItemModal(){
    console.log("event started")
    addItemModal.classList.add('visible-custom')
}

function CloseAddItemModal(){
    addItemModal.classList.remove('visible-custom')
}
