$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#over18').show();
  } else if (age === 18) {
    alert("Enjoy your first election. Sorry!");
    $('#over18').show();
  } else {
    $('#under18').show();
  }
});
