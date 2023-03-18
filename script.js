let form = document.getElementById('create-account-form')
let userInput = document.getElementById('username')
let emailInput = document.getElementById('email')
let passInput = document.getElementById('password')
let passInput2 = document.getElementById('confirm-password')

form.addEventListener('submit', (e) => {
    
    validateForm()

    if(ifFormValid() == true){
        form.submit()
    }
    else{
        e.preventDefault()
    }
})

let ifFormValid = () => {
    const inputContainers = form.querySelectorAll('.input-group')
    let result = true
    inputContainers.forEach((container) => {
        if(container.classList.contains('error')){
            result = false
        }

    })

    return result
}

let  validateForm = () => {
    // username
    if(userInput.value.trim() === ''){
        setError(userInput,'Name Can Not Be Empty')
    }
    else if(userInput.value.trim().length < 5 || userInput.value.trim().length > 15){
        setError(userInput,"Name must be min 5 and max 15 characters")
    }
    else{
        setSuccess(userInput)
    }
    // email
    if(emailInput.value.trim() === ''){
        setError(emailInput,"Email Can Not Be Empty")
    }
    else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput)
    }
    else{
        setError(emailInput,'Provide Valid Email Address')
    }
    // password
    if(passInput.value.trim() === ''){
        setError(passInput,'Password Can Not Be Empty')
    }
    else if(passInput.value.trim().length < 6 || passInput.value.trim() >20){
        setError(passInput,'Password Charecters Should be min 6 max 20')
    }
    else{
        setSuccess(passInput)
    }
    // confirm password
    if(passInput2.value.trim() === ''){
        setError(passInput2,'Password Can Not Be Empty')
    }
    else if(passInput2.value !== passInput.value){
        setError(passInput2,)
    }
    else{
        setSuccess(passInput2)
    }
}

let setError = (element,errorMessage)  => {
    const parent = element.parentElement
    if(parent.classList.contains('success')){
        parent.classList.remove('success')
    }
    parent.classList.add('error')
    const paragraph = parent.querySelector('p')
    paragraph.innerHTML = errorMessage
}

let setSuccess = (element) => {
    const parent = element.parentElement
    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    parent.classList.add('success')
}

let isEmailValid = (email) => {
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email)
}