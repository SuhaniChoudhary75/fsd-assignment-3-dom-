// Function to change the text of an element using innerHTML
function changeText() {
    var heading = document.getElementById('heading');
    heading.innerHTML = "Text Changed!";
    heading.style.color = "green";  // Change color of heading
}

// Function to change the image source after clicking a button
function changeImage() {
    var image = document.getElementById('image');
    image.src = "image2.jpg";  // Change to a new image
    image.style.width = "250px";  // Change the size of the image
}

// Function to add a new text node to the list
function addTextNode() {
    var ul = document.getElementById('itemList');
    var newItem = document.createElement("li");
    var textNode = document.createTextNode("New Item Added");
    newItem.appendChild(textNode);
    newItem.classList.add("list-item");
    ul.appendChild(newItem);
}

// Function to delete the last node from the list
function deleteNode() {
    var ul = document.getElementById('itemList');
    var items = ul.getElementsByTagName('li');
    if (items.length > 0) {
        ul.removeChild(items[items.length - 1]);  // Remove the last item
    } else {
        alert("No more items to delete!");
    }
}
