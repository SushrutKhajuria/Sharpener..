/* Q12 js */

function handleFormSubmit(event) {
    event.preventDefault();

    let username = event.target.username.value
    let email = event.target.email.value
    let phone = event.target.phone.value

    localStorage.setItem("Username", username)
    localStorage.setItem("Email", email)
    localStorage.setItem("Phone", phone)
}
module.exports = handleFormSubmit
