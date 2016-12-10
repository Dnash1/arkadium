console.log("linked");
var answered = false;

$(document).ready(function() {
	$(".internal").fadeIn();	
});

function ansCheck(year, ans) {
	if (answered === false) {
		if (ans === year) {
			$(".outcome").text("Correct!").fadeIn().css("color", "green");
			$(".plyAgain").fadeIn();
			answered = true;
		} else {
			$(".outcome").text("Incorrect!").fadeIn().css("color", "red");
			$(".corAns").text("Correct Answer: " + ans).fadeIn();
			$(".plyAgain").fadeIn();
			answered = true;
		}
	}
	
}

function reload() {
	window.location.reload(true);
}