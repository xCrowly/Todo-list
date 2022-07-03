var btnListener = document.getElementById("btn-inp");
var input = document.getElementById("input-text");
var todoItemParent = document.getElementById("todo-container");
var todoItemChild = document.getElementById("todo-item");

function getFormText() {
    var input2 = document.forms["myForm"]["Iname"].value;
    return input2;
}

function addItem() {
    var li = document.createElement("li");
    var getInputText = document.createTextNode(getFormText());
    li.appendChild(getInputText);
    todoItemParent.insertBefore(li, todoItemParent.firstChild);
}
function removeItem() {
    todoItemChild.remove();
}

btnListener.addEventListener('click', function () {
    if (getFormText() != "") {
        addItem();
    }
});

todoItemChild.addEventListener('dblclick', () => removeItem());
// todoItemParent["li"].addEventListener('dblclick', () => removeItem());










