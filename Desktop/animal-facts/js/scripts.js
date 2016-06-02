$(document).ready(function() {
  var animal = prompt("Type zebras, snakes, or spiders");

  if (animal === "zebras") {
    $('#zebras').show();
  } else if (animal === "snakes") {
    $('#snakes').show();
  } else if (animal === "spiders"){
    $('#spiders').show();
  }
});
