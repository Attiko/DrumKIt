// The for loop loops through the whole button class .drum




for (var i = 0; i<document.querySelectorAll(".drum").length; i++ ){

    // this checks for the particular button that is been clicked btw "w a s d j k l"
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        // this part of the code get the actual clicked button using the "this." notation and stores it in the new var name 
        var buttonInnerHTML = this.innerHTML;
        // passing both function for making sounds and animations
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);


       
        
    }
    );

// this gets the keystrock of the keyboard that was pressed, 
// and the argument "event" lets us know what got triggered and tap into the event that triggered the keydown by using "event.key"
// which get called into the methods makeSound() and animation()
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animation(event.key);
});


    function makeSound(key){
        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
                    
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
                
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
                    
            case "j":
                var tom1 = new Audio("sounds/snare.mp3");
                tom1.play();
                break;

            case "k":
                var tom1 = new Audio("sounds/crash.mp3");
                tom1.play();
                break;
            case "l":
                var tom1 = new Audio("sounds/kick-bass.mp3");
                tom1.play();
                break;
            default:
                break;
        }


    }

    function animation(currentKey){
        // this select the mouse click and keyboard key concatenating it to the class identifier
        var activeButton = document.querySelector("." + currentKey);
        // This adds a new class name
        activeButton.classList.add("pressed");
        // settimeout method sets the delay sequence for the animation and also removes the class name after
       setTimeout(function (){
        activeButton.classList.remove("pressed");
        
       }, 100);

    }
}   
    


