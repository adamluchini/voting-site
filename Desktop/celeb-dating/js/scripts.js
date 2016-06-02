$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var environment = $("select#environment").val();

    if (age) {

      if (gender === 'male' && age < 26 && environment === "hot") {
        quote = "Paula Poundstone";
      }

      if (gender === 'male' && age > 26 && environment === "hot") {
        quote = "Dame Judy Dench";
      }

      if (gender === 'female' && age < 26){
        quote = "Tony Abbot";
      }

      if (gender === 'female' && age > 26){
        quote = "Rick Astley";
      }

      $("#rate").empty().append(quote);
      $("#quote").show();
    } else {
      alert('Please enter your age.');
    }

    event.preventDefault();
  });
});
