let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let username = id('username'),
    email = id('email'),
    password = id('password'),
    form = id('form'),

    errMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    engine(username, 0, 'Username cannot be blank')
    engine(email, 1, 'Email cannot be blank')
    engine(password, 2, 'Password cannot be blank')
})

let engine = (id, serial, message) => {
    if(id.value.trim() === '') {
        errMsg[serial].innerHTML = message
        id.style.border = '2px solid red'
        successIcon[serial].style.opacity = '0'
        failureIcon[serial].style.opacity = '1'
    } else {
        errMsg[serial].innerHTML = ''
        id.style.border = '2px solid green'
        successIcon[serial].style.opacity = '1'
        failureIcon[serial].style.opacity = '0'
    }
}


