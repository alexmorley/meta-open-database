import { Autocomplete } from './modules/autocomplete.js';

let input_el = document.getElementById("search");
console.log(input_el);
let input_auto = Autocomplete(input_el, {onclick: goto_entry});
input_el.addEventListener("keyup",input_auto.update);

function goto_entry(entry) {
  if (entry.name) {
    let name = urlify(entry.name); // TODO: should store this in db
    window.location.href = window.location.origin + '/entry/' + name;
  }
}

function urlify(string) {
  return string.trim().replace(/\s/g, '%20');
}

function showLogin() {
  let el = document.getElementById("login");
  if(el.style.display == "block") {
    el.style.display = "none"; 
  } else {
    el.style.display = "block"; 
  }
}

