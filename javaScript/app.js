var btnListener = document.getElementById("btn-inp");
var input = document.getElementById("input-text");
var todoItemParent = document.getElementById("todo-container");
var idCount;

// get the input field text
function getFormText() {
  return document.forms["myForm"]["Iname"].value;
}

// Append Items to the DOM element
function addItem() {
  var li1 = document.createElement("li");
  li1.setAttribute("id", idCount);
  li1.setAttribute("ondblclick", "removeItem(this)");
  li1.setAttribute("onclick", "checkItem(this)");
  idCount++;
  var getInputText = document.createTextNode(getFormText());
  li1.appendChild(getInputText);
  todoItemParent.insertBefore(li1, todoItemParent.firstChild);
}

// remove Items to the DOM element
function removeItem(tempId) {
  tempId.remove();
}

// Add line through for finished toDO item
function checkItem(tempId) {
  if (
    tempId.getAttribute("style", "text-decoration: line-through;color: red;")
  ) {
    tempId.removeAttribute(
      "style",
      "text-decoration: line-through;color: red;"
    );
  } else {
    tempId.setAttribute("style", "text-decoration: line-through;color: red;");
  }
}

// Event listener for input button
btnListener.addEventListener("click", function () {
  if (getFormText() != "") {
    addItem();
  } else {
    alert("Please type something.");
  }
});
