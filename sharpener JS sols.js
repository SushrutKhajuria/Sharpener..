
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