




document.querySelector(".user-button").addEventListener("click",function(){
	var Player1=prompt("Enter Player 1 name");
	var Player2=prompt("Enter Player 2 name");

	var hide=document.querySelector(".user");
	hide.style.display="none";
	document.querySelector(".playerNames").innerHTML=Player1    + "<img src='images/vs.png'>" +     Player2;



});
	

document.querySelector(".roll-btn").addEventListener("click",function()
	{
		rollDice();
		playSound();
		
	});


function playSound() {
var audio=new Audio("sound/diceSound.mp3");
audio.play();

setTimeout(function() {
	audio.pause();
},600);

}



function rollDice()
{

var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);

var image1=document.querySelectorAll("img")[5].setAttribute("src","images/dice"+randomNumber1+".png");
var image2=document.querySelectorAll("img")[6].setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
{
	document.querySelector(".roll").innerHTML="Player 1 wins" ;
}
else if(randomNumber1<randomNumber2)
{
	document.querySelector(".roll").innerHTML="Player 2 wins"
}

else
{
	document.querySelector(".roll").innerHTML="It's a tie!!!!! Refresh Again";
}

}






