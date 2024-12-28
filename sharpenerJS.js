{/*Q11 js part */}

const fruitItems = document.getElementsByClassName('fruit')

const description = {
    Banana: "A long curved fruit with a yellow skin, soft flesh, and multiple seeds",
    Apple: "A round fruit typically with red, green, or yellow skin, containing seeds in its core",
    Orange: "A round fruit with a tough orange rind and juicy segmented flesh inside",
    Kiwi: "A small fruit with brown fuzzy skin, green flesh, and black seeds inside"
}


for (const fruitItem of fruitItems) {
    const name = fruitItem.firstChild.textContent

    fruitItem.innerHTML = name + `<p>${name}: ${description[name]}</p>`;

}

// Add input element inside form, before button, to take fruit description
const form = document.querySelector('form')
const button = form.querySelector('button')

const descriptionInput = document.createElement('input')
descriptionInput.type = 'text'
descriptionInput.name = 'description'
descriptionInput.id = 'description'

form.insertBefore(descriptionInput, button);


// Show the fruit description in italics on the next line

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fruitInput = form.querySelector('#fruit-to-add').value;
    const description = form.querySelector('#description').value;

    const fruitList = document.querySelector('.fruits')
    const li = document.createElement('li')

    li.innerHTML = fruitInput + ` <p style="font-style:italic">${description}</p>`


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function () {
        fruitList.removeChild(li);
    });

    li.appendChild(deleteButton);
    fruitList.appendChild(li);

    form.reset();
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter = document.getElementById('filter')

filter.addEventListener('keyup', (event) => {
    const textEnterd = event.target.value.toLowerCase()


    const fruitItems = document.getElementsByClassName('fruit')


    for (const fruitItem of fruitItems) {
        const currentFruitText = fruitItem.firstChild.textContent.toLocaleLowerCase()

        console.log(fruitItem.lastChild.textContent)


        const currentFruitTextIndex = currentFruitText.indexOf(textEnterd)


        fruitItem.style.display = (currentFruitTextIndex == -1) ? "none" : 'flex'
    }
})
