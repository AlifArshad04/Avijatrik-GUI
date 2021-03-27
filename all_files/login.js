const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if(username.value === '' || username.value == null) {
        messages.push('Name is required!')
    }
    
    else if(password.value.length <= 8) {
        messages.push('Password must be longer than 8 characters')
    }

    else if(password.value.length >= 20) {
        messages.push('Password must be smaller than 20 characters')
    }

    else if(password.value === 'password') {
        messages.push('Password can not be password')
    }

    else if(username.value != 'UserID1' ) {
        messages.push("Incorrect Username!")
    }

    else if( password.value != "AccessCode1") {
        messages.push("Incorrect Password!")
    }

     if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    
})