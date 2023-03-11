const input = window.document.getElementById("input");
const ul =window.document.querySelector("ul");

function add(){
    var li =window.document.createElement("li");
    var value = input.value;
    var value_li =window.document.createTextNode(value);

    li.appendChild(value_li);
    ul.appendChild(li);
}