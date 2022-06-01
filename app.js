//Constants-------------------------------------/


//Variables-------------------------------------/


//Cached elements-------------------------------/
const input = document.querySelector('input')
const submitBtn = document.querySelector('#submit-button')
const resetBtn = document.querySelector('#reset-button')
const list = document.querySelector('#todo-list')


//Event listeners-------------------------------/
submitBtn.addEventListener('click', userClick)
resetBtn.addEventListener('click', resetList)


//Functions-------------------------------------/
function userClick(evt) {
    if (input.value !== "") {
        const item = document.createElement('li')
        item.textContent = input.value
        list.appendChild(item)
        input.value = ""
    } else {
        return
    } 
}

function resetList(evt) {
    list.textContent = ""   
}

