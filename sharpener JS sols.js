
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

//Q6.  Write the code as shown in the video below:

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

//Q7. 

//html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="margin: 0">
    <div id="header" style="padding: 1rem 0; background-color: lightblue">
      <h1 id="main-heading" style="margin: 0">Fruit Shop</h1>
      <h3>Buy high quality organic fruits online</h3>
    </div>
    <div>
      <h2 id="basket-heading">Fruits In Basket</h2>
      <p id ="fruits-total">Total fruits: 4</p>
      <ul class="fruits">
        <li class="fruit">Banana</li>
        <li class="fruit">Apple</li>
        <li class="fruit">Orange</li>
        <li class="fruit">Kiwi</li>
      </ul>
    </div>
    <div id="thanks"></div>
  </body>
  <script src="index.js"></script>
</html>


//q7 javascript
// Write your code below:
var a = document.querySelector("h3")
a.style.fontStyle = "italic";