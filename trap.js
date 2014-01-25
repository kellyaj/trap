var selection = window.getSelection();
var url = "http://localhost:5000/create";

function isValidFedexNumber(selection) {
  var fedexRegexp = /\b((96\d\d\d\d\d ?\d\d\d\d|96\d\d) ?\d\d\d\d ?\d\d\d\d( ?\d\d\d)?)\b/i
  return fedexRegexp.test(selection);
}


if (isValidFedexNumber(selection)) {
  var itemName = window.prompt("enter an item name:");
  var data = {"name": itemName, "number": selection.toString()};
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.send(JSON.stringify(data));
} else {
  alert('invalid number');
}
