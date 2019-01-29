import { Autocomplete } from './modules/autocomplete.js';

let input_el = document.getElementById("name");
let input_auto = Autocomplete(input_el, {onclick: populate});
input_el.addEventListener("keyup",input_auto.update);

function populate(entry) {
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
