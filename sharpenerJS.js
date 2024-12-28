{/* Q14 */}

{/* .JS part */}

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Extract form data
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    // Create a user object
    const userDetails = { username, email, phone };

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("UserDetails")) || [];

    // Add new user
    existingUsers.push(userDetails);

    // Save back to localStorage
    localStorage.setItem("UserDetails", JSON.stringify(existingUsers));

    // Display updated list of users
    displayUsers();
}

function displayUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear existing list

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("UserDetails")) || [];

    // Populate the list
    users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
        userList.appendChild(listItem);
    });
}

// Display existing users when the page loads
document.addEventListener("DOMContentLoaded", displayUsers);

module.exports = handleFormSubmit
