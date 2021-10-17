function showPassword(elementName) {

    const passwordBox = document.getElementById(elementName)

    console.log(passwordBox)
    if (passwordBox.attributes["type"].value === 'text') {
        passwordBox.attributes["type"].value = 'password'
    } else if (passwordBox.attributes["type"].value === 'password') {
        passwordBox.attributes["type"].value = 'text'
    }
}