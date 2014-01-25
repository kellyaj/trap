var selection = window.getSelection();
var url = "http://localhost:5000/create";

function isValidFedexNumber(selection) {
  return /\b((96\d\d\d\d\d ?\d\d\d\d|96\d\d) ?\d\d\d\d ?\d\d\d\d( ?\d\d\d)?)\b/i.test(selection);
}

if (isValidFedexNumber(selection)) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.send(selection)
} else {
  alert('invalid number')
}
