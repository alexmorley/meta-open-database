function search(name, field) {
  var options = ["hello", "goodbye"];
  return options
}

function autocomplete() {
  let current_input = this.value;
  let field = this.id;
  let options = search(current_input, field);
  options.forEach((el,i,arr) => {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(el);
    node.appendChild(textnode);
    this.nextSibling
    this.parentNode.insertBefore(node,this.nextSibling);
  });
}

let input_el = document.getElementById("name");
input_el.addEventListener("keyup",autocomplete);
