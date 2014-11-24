var addButton = document.getElementById("newTask");
var guessButton = document.getElementById('newGuess');
var secretNumber = 0;
var number = 0;
var maxNumber = 100;
var previousGuess = 0;

/*================================*
FUNCTIONS
================================*/

/*==================================================
FUNCTIONS TO HIDE AND SHOW THE GUESS BUTTON
===================================================*/
function show () {
     document.getElementById('newGuess').style.display = 'inline';
        //alert('hello');
}
function hide () {
     document.getElementById('newGuess').style.display = 'none';
        //alert('hello');
}hide();

   /* var validInput = function (e) {
         e.preventDefault();
        number = document.getElementById('userGuess').value;
        console.log( "number is "+ number); 
        if (typeof number === /d [100 /]

         NaN || typeof number === "string" || number > 100) {
            console.log("YOU HAVE TO ENTER A VALID INPUT BETWEEN 0 and 100");
        }   
        else {
            getGuess();
        }
        return false; 
}*/

function isNormalInteger(number) {
    return (/^[1-9]\d*$/).test(number);
}

// Checks to see if the guess is within the parameters given
function validGuess(number) {
    return isNormalInteger(number) && + number <= 100 && + number >= 1;
}
/*===================================================
FUNCTIONS TO HIDE AND SHOW THE GUESS BUTTON ENDS HERE
===================================================*/
/*==================================================
FUNCTIONS FOR RESPONSE FIELDS
===================================================*/
var waiting = function () {
         document.getElementById("talk").innerHTML = "<div class=waitingReply> WAITING FOR YOUR GUESS </div>";
            }

var answered = function () {
            document.getElementById("talk").innerHTML="<div class=correctReply> YOU GOT IT THE ANSWER IS " + secretNumber + "</div>";   
            }

var hotter = function () {
             document.getElementById("talk").innerHTML="<div class=hotReply> ITS GETTING HOTTER </div>";   
            }
var colder = function () {
             document.getElementById("talk").innerHTML="<div class=cold Reply> ITS GETTING COLDER </div>";   
            }

var neitherHotNorCold = function () {
             document.getElementById("talk").innerHTML="<div class=neitherReply> ITS NEITHER HOT NOR COLD </div>";   
         }
/*********************
GENERATE SECRET NUMBER AND INITILIZE GAME MODE
**********************/


var initialize = function () {
            // this is to show the 'waiting for your guess' using an anonymous function//
           previousGuess = 0; 
     // (function (){
     //     document.getElementById("talk").innerHTML = "WAITING FOR YOUR GUESS";
     // })();  
     waiting(); 
    show();
   //  i need to clear the input field
    secretNumber = Math.round(Math.random()*100);
    console.log("SECRET NUMBER: " +secretNumber);
   	console.log("weekeddddddd");
	return false;
}

var getGuess = function (e) {
     e.preventDefault();
	if (validGuess(number)){
    // number = document.getElementById('userGuess').value;
    // console.log( "number is "+ number);
    if (number == secretNumber){
       
        answered();
        hide();
        //i want to use this space to clear the input whenever a new guess is opened
        return secretNumber;   
    }
     else{
        previousGuess = previousGuess;
          var previousDiff = Math.floor(Math.abs(secretNumber - previousGuess) );
          var newDiff = Math.floor(Math.abs(secretNumber - number));
            // console.log('maxnumber is '+ maxNumber);  
            // console.log("previousDiff is "+previousDiff);
            // console.log(" new diff " + newDiff);
            // console.log("previousguess is "+previousGuess);
            // console.log("secretNumber is "+ secretNumber);

         if (previousDiff > newDiff){
                hotter();      
         }
        else if (previousDiff < newDiff) {
                colder(); 
        }else {
                neitherHotNorCold(); 
         }  
         previousGuess = number;
         console.log( "new previous is " +previousGuess);
    }
  }         
    	

}



/*================================
EVENT HANDLERS
================================*/
addButton.addEventListener('click', initialize, false);
// guessButton.onclick = getGuess;
guessButton.addEventListener ('click', getGuess, false);


//animation is javascript for the progress bar

//getguess function is going to be called inside the validInput functions