$(document).ready(function() {

  $("#animal").change(function(){
    var animal = $("#animal").val();

    if (animal === "zebras") {
      $('#zebras').show();
    } else if (animal === "snakes") {
      $('#snakes').show();
    } else if (animal === "spiders"){
      $('#spiders').show();
    }
  })






//  var animal = prompt("Type zebras, snakes, or spiders");

//  if (animal === "zebras") {
//    $('#zebras').show();
//  } else if (animal === "snakes") {
//    $('#snakes').show();
//  } else if (animal === "spiders"){
//    $('#spiders').show();
//  }
});
