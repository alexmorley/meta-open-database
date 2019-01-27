function search(term) {
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

export function Autocomplete(elem, opts) {
  let container = document.createElement("UL");
  elem.parentNode.insertBefore(container,elem.nextSibling);
  if (opts.onclick == "populate") {
    onclick = populate;
  } else if (opts.onclick == "goto") {
    onclick = goto_entry;
  }

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

  function goto_entry(entry) {
    console.log(entry);
  }

  function update() {
    let current_input = elem.value;
    let field = "name"; //elem.id;
    let options = search(current_input)
      .then(
        function resolve(options) {
          container.innerHTML = ""
          options.forEach((el,i,arr) => {
            let entry = `<li> ${el[field]} </li>`;
            container.innerHTML = container.innerHTML + entry;
            Array.from(container.children).forEach((child_el) => {
              child_el.addEventListener("click", _ => onclick(el));
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
    onclick
  }
}
