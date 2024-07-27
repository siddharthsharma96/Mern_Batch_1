// How to select Elements using JS
// Just to select the tag having that id
document.getElementById("id");

// Select all the elements with the specified class name
document.getElementsByClassName("class");

// Select all the elements with the specified tag name
document.getElementsByTagName("p");

// take the first element of the specified class name or id name
document.querySelector(".class");
document.querySelector("#id");

// take the  of the specified class name or id name
document.querySelectorAll(".class");
document.querySelectorAll("#id");

// Adding or Removing Elements
// To create any tag using js we have to use createElement
var newElement = document.createElement("TagName");
newElement.textContent = "Just To Write content inside that newElement tag";

// Just to insert this new tag withing another stored in html
document.body.appendChild(newElement);

// Just to remove any element
newElement.remove();

// Modifying element Attribute
// To get the attribute
let value = newElement.getAttribute("src");

// / To Set the attribute
newElement.setAttribute("src", "image.png");

// To remove any attribute
newElement.removeAttribute("src");

// To Change the style

newElement.style.color = "red";

// To add any class in tag
newElement.classList.add("active name");

// To remove any class in tag
newElement.classList.remove("active name");
