var leapYear = function(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }

};



$(document).ready(function(){
  $("form#leapForm").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#answer").text(result);
  });

});
