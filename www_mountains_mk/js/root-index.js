function check(form) {
    if (form.username.value == "andrea123" && form.password.value == "123456") {

        window.open('pages/login-success.html', "_blank")

    }
    else {
        alert("The username and password you entered don't match. Please try again later.")
    }
}