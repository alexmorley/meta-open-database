import { Autocomplete } from './modules/autocomplete.js';

let input_el = document.getElementById("name");
let input_auto = Autocomplete(input_el, {onclick: "populate"});
input_el.addEventListener("keyup",input_auto.update);
