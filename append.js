const placesList = document.getElementById("places-list");
const li = document.createElement("li");
li.innerText = "pahartoli Bon";
placesList.appendChild(li);

const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food Place";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "biryani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "khicuri";
ul.appendChild(li2);

section.appendChild(ul);
mainContainer.appendChild(section);

// SET INNER HTML DIRECTLY
const dressSection = document.createElement("section");
dressSection.innerHTML = `
<h1>My Dress Section </h1>
<ul>
    <li>T-Shirt</li>
    <li>Lungi</li>
    <li>Sando Gangi</li>
</ul>

`;
mainContainer.appendChild(dressSection);
