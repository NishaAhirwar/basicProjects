var buttonColors=["red","blue","green","yellow"];

var gamePattern= [];
var userClickedPattern=[];

var level=0;
var started=false;


$(".start-button").click(function()
	{
		if(!started)
		{
		//3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
		    $("#level-title").text("Level " + level);

		    nextSequence();
		    started = true;
		    $(".start-button").addClass("startDisable");

		}
		
	});







$(".btn").click(function() {

	// body...  

	if(started===true)
	{
		var userChosenColor=$(this).attr("id");
	userClickedPattern.push(userChosenColor);

	playSound(userChosenColor);			
	animatePress(userChosenColor);

	checkAnswer(userClickedPattern.length-1);
	}
	
});
 

function checkAnswer(currentLevel)
{
	if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
	{
		console.log("success");
		if(userClickedPattern.length===gamePattern.length)
			{ setTimeout(function()
				{
					nextSequence();
				},1000);
	 		}
	}

	else
	{
		console.log("failure");

		playSound("wrong");

		$("body").addClass("game-over");
		setTimeout(function()
			{
				$("body").removeClass("game-over");
			},200);

		$("#level-title").text("Game Over,Click Start to restart");

		startOver();
	}
			
			
}



function nextSequence()
{
	
	userClickedPattern=[];
    level++;

	$("#level-title").text("Level "+level);

	var randomeNumber=Math.floor(Math.random()*4);
	var randomChosenColor=buttonColors[randomeNumber];

	gamePattern.push(randomChosenColor);

	$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

	playSound(randomChosenColor);
}

function startOver()
{
	level=0;
	gamePattern=[];
	started=false;
	$(".start-button").removeClass("startDisable");
}




function playSound(name)
{

	var audioButton=new Audio("sounds/"+name+".mp3");
	audioButton.play();

}



function animatePress(currentColor)
{
	$("#"+currentColor).addClass("pressed");

	setTimeout(function () {
	$("#"+currentColor).removeClass("pressed");
	},100);
	
}

