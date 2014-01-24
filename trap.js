var selection = window.getSelection();
var url = "http://localhost:5000/create";

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.send(selection)
