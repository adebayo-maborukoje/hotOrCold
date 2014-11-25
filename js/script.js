// var taskInput = document.getElementById("new-task");
// var addButton = document.getElementsByTagName("button")[0];
var addButton = document.getElementById("newTask");
var guessButton = document.getElementsByTagName("button")[0];
var number;
var maxNumber =100;
var previousGuess = 0;

function number (){
    document.getElementById("newGuess");
    return number;
}
number();

// var addTask = function (){

// alert('working.... this');    
// }
//this is to generate a new secret number
var hide = function(){
    // document.getElementById("guess").style.display= "none";
    document.getElementById("waiting").style.display = "none";
}; hide();

var secretNumber = function () {
                // this is to show the 'waiting for your guess' using an anonymous function//
             (function (){
                 document.getElementById("talk").innerHTML = "Waiting for your Guess";
                 
            })();   

   show();
    secretNumber = Math.round(Math.random()*100);
    console.log("SECRET NUMBER: " +secretNumber);
    
    return secretNumber;
    
}
//this is to show and hide the guess button //

var show = function(){
    document.getElementById("guess").style.display= "inline";

} 

//when the submit button is pressed      checkValue
// guess.onclick = document.getElementById();


var checkValue = function () {
    var number = document.getElementById('new-guess');
        console.log("Number is: " + number);

}

// function getRandomInt(min, max) {
//       return Math.floor(Math.random() * (max - min + 1) + min);
//     }

addButton.onclick = secretNumber;
// guess.onclick = console.log("working");  this is not working
// submit.onclick = //


//function to compare

 var compare = function (){
    if (number === secretNumber){
       (function (){
            document.getElementById("talk").innerHTML="YOU GOT IT THE ANSWER IS +" secretNumber;   
        })();   
    }
    else{
        var PreviousDiff = Math.floor(Math.abs(maxNumber - previousGuess) );
        var newDiff = Math.floor(Math.abs(maxNumber - number));

        if (PreviousDiff > newDiff){
            (function (){
            document.getElementById("talk").innerHTML="ITS GETTING COLDER";   
        })();          
         }
        else if (PreviousDiff < newDiff) {
                (function (){
            document.getElementById("talk").innerHTML="ITS GETTING HOTTER";   
            })();  
        }else {
            (function (){
            document.getElementById("talk").innerHTML="ITS NEITHER HOT NOR COLD";   
        })();  
        }    
        } previousGuess = number; 
    }


/******************************************
includce the Math.max to calculate the max temp at every game
*/


