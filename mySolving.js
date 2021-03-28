var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence (){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour;

    switch (randomNumber) {
        case 0:
            randomChosenColour = buttonColours[0];
            break;
        
        case 1:
            randomChosenColour = buttonColours[1];
            break;
        
        case 2: 
            randomChosenColour = buttonColours[2];
            break;

        case 3:
            randomChosenColour = buttonColours[3];
            break;
        
        default:
            break;
    }
        
    gamePattern.push(randomChosenColour);
    
    for (var i = 0; i<=gamePattern.length; i++) {
        $("#" + gamePattern[i]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var Sound = new Audio(`sounds/${gamePattern[i]}.mp3`);
    Sound.play();
    
    }
    
    
    
}

