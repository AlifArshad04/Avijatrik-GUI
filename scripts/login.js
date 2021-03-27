const username = document.getElementById('Username')
const password = document.getElementById('Password')
const btn_login = document.getElementById('btn_signin')
const newUsername = document.getElementById('newUsername')
const newPassword = document.getElementById('newPassword')
const reEntertedPassword = document.getElementById('reEnteredPsssword')
const btn_register = document.getElementById('btn_signup')

btn_login.addEventListener('click', (e) => {
    let messages = []

    if (username.value === "" || username.value == null) {
        messages.push('Name is required!')
    }

    else if (password.value.length <= 8) {
        messages.push('Password must be longer than 8 characters')
    }

    else if (password.value.length >= 20) {
        messages.push('Password must be smaller than 20 characters')
    }

    else if (password.value === 'password') {
        messages.push('Password can not be password')
    }

    else if (username.value != 'UserID1') {
        messages.push("Incorrect Username!")
    }

    else if (password.value != "AccessCode1") {
        messages.push("Incorrect Password!")
    }

    if (messages.length > 0) {
        //e.preventDefault()
        //errorElement.innerText = messages.join(', ')
        alert(messages)
    }


})

btn_register.addEventListener('click', (e) => {
    alert('Registration Clicked!')
})