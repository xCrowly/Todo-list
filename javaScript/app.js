var btnListener = document.getElementById("btn-inp");
var input = document.getElementById("input-text");
var todoItemParent = document.getElementById("todo-container");
var idCount = 0;

function getFormText() {
    var input2 = document.forms["myForm"]["Iname"].value;
    return input2;
}

function addItem() {
    var li1 = document.createElement("li");
    li1.setAttribute('id', idCount)
    li1.setAttribute('ondblclick', "removeItem(this)")
    li1.setAttribute('onclick', "checkItem(this)")
    idCount++;
    var getInputText = document.createTextNode(getFormText());
    li1.appendChild(getInputText);
    todoItemParent.insertBefore(li1, todoItemParent.firstChild);
}

function removeItem(tempId) {
    console.log(tempId.id);
    tempId.remove();
}

function checkItem(tempId) {
    tempId.setAttribute('style', 'text-decoration: line-through;color: red;');
}

btnListener.addEventListener('click', function () {
    if (getFormText() != "") {
        addItem();
    } else { alert("Please type something."); }
});










