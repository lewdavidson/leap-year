/* biz logic */
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }

};
/* user interface */
$(document).ready(function(){
  $("form#leapForm").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (result === false) { /* or !result */
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#answer").show();
  });
});
