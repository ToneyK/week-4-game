$(function () {
//variables
  //computer random number
  var computerRandomNumber = Math.floor((Math.random() * 100) + 20);
  //value for each click of crystal
  $("img").each(function () {
    $(this).attr("data-value", Math.floor((Math.random() * 11) + 1));
  }); // END EACH FUNCTION


  //wins
  var wins = 0;
  //losses
  var losses = 0;
  //current user value
  var userValue = 0;

  $("img").on("click", function () {
    userValue += parseInt($(this).attr("data-value"));
    console.log(userValue);
  });

//loops



//functions
  //clicks on crystals
    //adding up user value
    //displaying user value
  //reset defaults

//conditionals
  //if user value > computer value then lose
  //if user value = computer value then win


}); // END READY
