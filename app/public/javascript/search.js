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
  function populate(entry) {
    console.log("Populating");
    console.log(entry);
    Object.keys(entry).forEach((el,i,arr) => {
      if (typeof((entry[el])) === "string" ) {
        let html_el = document.getElementById(el);
        if (html_el) {
          html_el.value = entry[el];
        }
      } else {
        populate(entry[el]);
      }
    });
  }
  function update() {
    let current_input = elem.value;
    let field = elem.id;
    let options = search(current_input, field)
      .then(
        function resolve(options) {
          container.innerHTML = ""
          options.forEach((el,i,arr) => {
            let entry = `<li> ${el[field]} </li>`;
            container.innerHTML = container.innerHTML + entry;
            Array.from(container.children).forEach((child_el) => {
              child_el.addEventListener("click", _ => populate(el));
            });
          });
        },
        function reject(err) {
          container.innerHTML = err//"Server Error";
        }
      );
  }
  return {
    update,
    populate
  }
}

let input_el = document.getElementById("name");
let input_auto = Autocomplete(input_el);
input_el.addEventListener("keyup",input_auto.update);
