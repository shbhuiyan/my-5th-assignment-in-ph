function valueCollector(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function innerTextCollector(id) {
  const innerText = parseFloat(document.getElementById(id).innerText);
  return innerText;
}

function classAdd(id) {
  const classes = document.getElementById(id).classList.add("hidden");
  return classes;
}

function classRemove(id) {
  const classes = document.getElementById(id).classList.remove("hidden");
  return classes;
}
