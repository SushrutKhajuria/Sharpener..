
const a = document.getElementById("main-heading");
a.innerHTML = "Fruit World";
a.style.color = "orange";

const b = document.getElementById("header");
b.style.backgroundColor = "green";
b.style.borderBottom = "2px solid orange";

const c = document.getElementById("basket-heading");
c.style.color = "green"

const d = document.getElementById("thanks")
d.innerHTML = "<p>Please visit us again</p>";


// Write your code below: Q4
const a = document.getElementsByClassName('fruit')
a[2].style.backgroundColor = 'yellow'

for (let ele of a) { 
    ele.style.fontWeight = 'bold'
}

// Write your code below: Q5
const l = document.getElementsByTagName("li")

l[4].style.color = "blue";

for (let i = 0; i < l.length; i++) { 
    l[i].style.fontStyle = "italic";
}

//Q5.  Write the code as shown in the video below:

// Write answer to the questions asked below:
const a = document.querySelector("#main-heading")
a.style.textAlign = "right";

const b = document.querySelector("#basket-heading")
b.style.color = "brown"

const c = document.querySelectorAll("li")

for (let i = 0; i < c.length; i++) { 
    if ((i+1) % 2 === 0) {
        c[i].style.backgroundColor = "brown";
        c[i].style.color = "white";
    }
   
}

