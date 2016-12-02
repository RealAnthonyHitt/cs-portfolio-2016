
var todoButton = document.getElementById("todoButton");
var textOne = document.getElementById("textOne");
var CssStylingDropdown = document.getElementById("CssStylingDropdown");
var todoDiv = document.getElementById("todoDiv");
var deleteButton = document.getElementById("deleteButton")
todoButton.addEventListener("click", function() {

    if (CssStylingDropdown.value === "Red") {
        var inputDiv = '<p style="color:red" >' +  textOne.value + '</p>';
        todoDiv.innerHTML += inputDiv;
    }
    else if (CssStylingDropdown.value === "Blue") {
        var inputDiv = '<p style="color:blue" >' +  textOne.value + '</p>';
        todoDiv.innerHTML += inputDiv;
    }
    else if (CssStylingDropdown.value === "Yellow") {
        var inputDiv = '<p style="color:yellow" >' +  textOne.value + '</p>';
        todoDiv.innerHTML += inputDiv;
    }
    else if (CssStylingDropdown.value === "Green") {
        var inputDiv = '<p style="color:green" >' +  textOne.value + '</p>';
        todoDiv.innerHTML += inputDiv;
    }
    else if (CssStylingDropdown.value === "Please select an option") {
        var inputDiv = '<p>' +  "Please select a color option." + '</p>';
        todoDiv.innerHTML += inputDiv;
    }
 
});
//Unable to work. 
deleteButton.addEventListener("click", function(evt) {
    if (inputDiv.value > 0) {
        var inputDiv = todoDiv.removeEventListener; 
        todoDiv.innerHTML -= inputDiv;
    }

});