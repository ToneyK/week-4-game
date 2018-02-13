//VARIABLES
//wins
var wins = 0;
//losses
var losses = 0;
//current user value
var userValue = 0;

//function reset (){
// 	var computerRandomNumber = Math.floor((Math.random() * 100) + 20);
// 	$("#computerRandom").html("Number to Guess: " + computerRandomNumber);
// };

$(function targetNumber() {
	//computer random number
	var computerRandomNumber = Math.floor((Math.random() * 100) + 20);
	$("#computerRandom").html("Number to Guess: " + computerRandomNumber);

	//value for each click of crystal
	$("img").each(function crystalValue() {
		$(this).attr("data-value", Math.floor((Math.random() * 11) + 1));
		console.log(this)
	}); // END OF FUNCTION

	//on click for userValue
	$("img").on("click", function () {
		userValue += parseInt($(this).attr("data-value"));
		//display userValue
		$("#userScore").html("Your Score: " + userValue);
		
		//wins are update to html
		if (userValue === computerRandomNumber) {
			wins++;
			$("#wins").html("Wins: " + wins);
		}

		//losses are update to html
		if(userValue>computerRandomNumber){
			losses++;
		$("#losses").html("Losses: " + losses);
		}
	});//END OF FUNCTION



	//functions
	//clicks on crystals
	//adding up user value
	//displaying user value
	//reset defaults

	//conditionals
	//if user value > computer value then lose

	//if user value = computer value then win







	//if (result === randomNumber) {
	// 	wins++;
	// 	$("#win-lose").html("<h2>Winner!</h2>");
	// 	$("#wins").html("<h3>" + wins + "</h3>");
	// }

}); // END READY
