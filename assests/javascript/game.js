$(function () {

	//VARIABLES
	var computerRandomNumber;
	//wins
	var wins = 0;
	//losses
	var losses = 0;
	//current user value
	var userValue = 0;

	function reset() {
		targetNumber();
		newCrystalValues();
		userValue = 0;
		$("#userScore").html("Your Score: " + userValue);
	};

	function targetNumber() {
		//computer random number
		computerRandomNumber = Math.floor((Math.random() * 100) + 20);
		$("#computerRandom").html("Number to Guess: " + computerRandomNumber);
	}; // END TARGETNUMBER FUNCTION

	targetNumber();

	//value for each click of crystal
	function newCrystalValues() {
		$("img").each(function () {
			$(this).attr("data-value", Math.floor((Math.random() * 11) + 1));
			console.log(this)
		}); // END OF EACH FUNCTION TO APPLY CRYSTAL VALUES
	}; // END OF newCrystalValues FUNCTION

	newCrystalValues();

	//on click for userValue
	$("img").on("click", function () {
		userValue += parseInt($(this).attr("data-value"));
		//display userValue
		$("#userScore").html("Your Score: " + userValue);

		//wins are update to html
		if (userValue === computerRandomNumber) {
			wins++;
			$("#wins").html("Wins: " + wins);
			reset();
		}

		//losses are update to html
		if (userValue > computerRandomNumber) {
			losses++;
			$("#losses").html("Losses: " + losses);
			reset();
		}
	});//END OF CLICK FUNCTION TO COMPARE CRYSTAL VALUES

}); // END READY
