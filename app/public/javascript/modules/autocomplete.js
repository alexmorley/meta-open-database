function search(term) {
  let request = new Request(window.location.origin+`/api/search?term=${term}`,
    { method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }})
  return fetch(request)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
      }
      let json = response.json();
      return json
    })
}

export function Autocomplete(elem, opts) {
  let container = document.createElement("UL");
  elem.parentNode.insertBefore(container,elem.nextSibling);

  function update() {
    let current_input = elem.value;
    let field = "name"; //elem.id;
    let options = search(current_input)
      .then(
        function resolve(options) {
          container.innerHTML = ""
          if (options.length > 0) {
            options.forEach((el,i,arr) => {
              let entry = `<li> ${el[field]} </li>`;
              container.innerHTML = container.innerHTML + entry;
              Array.from(container.children).forEach((child_el) => {
                child_el.addEventListener("click", _ => opts.onclick(el));
              });
            });
          }
        },
        function reject(err) {
          console.log(err);//"Server Error";
        }
      );
  }
  return {
    update: update,
    onclick: opts.onclick
  }
}
