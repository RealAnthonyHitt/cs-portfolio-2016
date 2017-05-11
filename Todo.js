
var todoButton = document.getElementById("todoButton");
var textOne = document.getElementById("textOne");
var CssStylingDropdown = document.getElementById("CssStylingDropdown");
var todoDiv = document.getElementById("todoDiv");
var deleteButton = document.getElementById("deleteButton")
//Button which causes the "Add" Button to add a new item to the list.
todoButton.addEventListener("click", function() {
// This if statement changes the input into a red color.
    if (CssStylingDropdown.value === "Red") {
        var inputDiv = '<p style="color:red" >' +  textOne.value + '</p>';
        todoDiv.innerHTML += inputDiv;
    }
    // This else if statement changes the input into a Blue color
    else if (CssStylingDropdown.value === "Blue") {
        var inputDiv = '<p style="color:blue" >' +  textOne.value + '</p>';
        todoDiv.innerHTML += inputDiv;
    }
    // This else if statement changes the input into a Yellow color
    else if (CssStylingDropdown.value === "Yellow") {
        var inputDiv = '<p style="color:yellow" >' +  textOne.value + '</p>';
        todoDiv.innerHTML += inputDiv;
    }
    // this else if statement changes the input into a Green color.
    else if (CssStylingDropdown.value === "Green") {
        var inputDiv = '<p style="color:green" >' +  textOne.value + '</p>';
        todoDiv.innerHTML += inputDiv;
    }
    else if (CssStylingDropdown.value === "Please select an option") {
        var inputDiv = '<p>' +  "Please select a color option." + '</p>';
        todoDiv.innerHTML += inputDiv;
    }
    else {
        var inputDiv = "Could not write To-Do item. Please try again."
    }
 
});
// Deletes all Divs "added"
deleteButton.addEventListener("click", function() {
    todoDiv.innerHTML = "";
});

//Allows one to click on each div to delete it individually. Note the bug which causes all to be deleted when clicking between 2 divs.
todoDiv.addEventListener("click", function(evt) {
    evt.target.parentNode.removeChild(evt.target)
});