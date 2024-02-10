const sections = document.querySelectorAll("section");
// console.log(sections);
for (const section of sections) {
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = "5px";
  section.style.borderRadius = "15px";
  section.style.padding = "10px";
  section.style.backgroundColor = "lightgray";
}

const placeContainer = document.getElementById("placeContainer");
placeContainer.classList.add("text-violet");
