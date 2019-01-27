import { Autocomplete } from './modules/autocomplete.js';

let input_el = document.getElementById("search");
console.log(input_el);
let input_auto = Autocomplete(input_el, {onclick: "goto"});
input_el.addEventListener("keyup",input_auto.update);

function showLogin() {
  let el = document.getElementById("login");
  if(el.style.display == "block") {
    el.style.display = "none"; 
  } else {
    el.style.display = "block"; 
  }
}

