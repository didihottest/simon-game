var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;



$(document).keypress(function(){
    if (started === false){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    }
});

function nextSequence (){
    level ++
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(buttonColours[randomNumber]);
    var playSound = new Audio(`sounds/${randomChosenColour}.mp3`);
    playSound.play();
    $('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) 
    
}



$(".btn").click(function (event) {
    var activeButton = this.id;
    userClickedPattern.push(activeButton);
    var playSound = new Audio(`sounds/${activeButton}.mp3`);
    playSound.play();
    $('#' + activeButton).addClass('pressed')
    setTimeout(()=>{
        $('#'+ activeButton).removeClass('pressed')
    }, 100);
    
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success")
    }

    if (gamePattern[currentLevel] !== userClickedPattern[currentLevel]){
        $("body").addClass("game-over");
        var playSound = new Audio(`sounds/wrong.mp3`);
        playSound.play();
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }

    if (gamePattern.length === userClickedPattern.length){
        setTimeout(()=> {
            nextSequence();
        }, 1000);
    }
}

function startOver (){
    level === 0;
    gamePattern === [];
    userClickedPattern === [];
}