function firstLetterCaps(item) {
  var remainder = item.split(item.charAt(0))[1];
  var firstLetter = item.charAt(0).toUpperCase();
  var item = firstLetter + remainder;
  return item;
}

function addOrderDetails(firstName, lastName, address, item) {
  $("#first-name-confirm").text(firstName);
  $("#last-name-confirm").text(lastName);
  $("#address-confirm").text(address);
  $("#dino-confirm").text(item);
}

$(document).ready(function(){
  $("#submit").click(function(e){
    e.preventDefault();

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var address = $("#address").val();
    var item = $("input:radio[name=dinosaur]:checked").val();
    item = firstLetterCaps(item);
    addOrderDetails(firstName, lastName, address, item);
  });
});
