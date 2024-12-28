{/* Q.15 */}

// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    let username = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;

    const newUser = {
        username: username,
        email: email,
        phone: phone
    };

    const existingUsers = JSON.parse(localStorage.getItem("UserDetails")) || [];

    existingUsers.push(newUser);

    localStorage.setItem("UserDetails", JSON.stringify(existingUsers));

    displayUsers(existingUsers);
}

function displayUsers(users) {
    let userList = document.querySelector("ul");

    userList.innerHTML = "";

    users.forEach((user, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `Username: ${user.username} Email: ${user.email} Phone: ${user.phone} <button onclick="deleteUser(${index})">Delete</button>`;

        userList.appendChild(listItem);
    });
}

function deleteUser(index) {
    let existingUsers = JSON.parse(localStorage.getItem("UserDetails")) || [];

    existingUsers.splice(index, 1);

    localStorage.setItem("UserDetails", JSON.stringify(existingUsers));

    displayUsers(existingUsers);
}

module.exports = handleFormSubmit;
