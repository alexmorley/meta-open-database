function search(term, field) {
  let request = new Request(`api/search?term=${term}`,
    { method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }})
  return fetch(request)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
      }
      return response.json()
    })
}

function Autocomplete(elem) {
  let container = document.createElement("UL");
  elem.parentNode.insertBefore(container,elem.nextSibling);
  function update() {
    let current_input = elem.value;
    let field = elem.id;
    let options = search(current_input, field)
      .then(
        function resolve(options) {
          container.innerHTML = ""
          options.forEach((el,i,arr) => {
            console.log(el);
            let entry = `<li> ${el[field]} </li>`;
            container.innerHTML = container.innerHTML + entry;
          });
        },
        function reject(err) {
          container.innerHTML = err//"Server Error";
        }
      );
  }
  return {
    update
  }
}

let input_el = document.getElementById("name");
let input_auto = Autocomplete(input_el);
input_el.addEventListener("keyup",input_auto.update);
