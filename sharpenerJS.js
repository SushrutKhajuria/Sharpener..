{/* Q10. add and delete fruits */}

const form = document.querySelector('form');
const input = document.querySelector('#fruit-to-add');
const fruitList = document.querySelector('.fruits');

// Function to add the Edit button 
function addEditButton(li) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    li.appendChild(editButton);
}

// Add Edit buttons to existing list items
const existingItems = document.querySelectorAll('.fruits li');
existingItems.forEach((li) => {
    addEditButton(li);
});

// Listen for form submission to add a new fruit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form refresh

    // Create a new list item
    const newFruit = document.createElement('li');
    newFruit.className = 'fruit';
    newFruit.textContent = input.value;

    // Add Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.className = 'delete-btn';
    newFruit.appendChild(deleteButton);

    // Add Edit button
    addEditButton(newFruit);

    // Append the new list item to the list
    fruitList.appendChild(newFruit);

    // Clear the input field
    input.value = '';
});

// Delete functionality
fruitList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement; 
        fruitList.removeChild(li); 
    }
});
