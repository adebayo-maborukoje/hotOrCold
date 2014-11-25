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

var isNormalInteger = function (number) {
    return (/^[1-9]\d*$/).test(number);
}

// Checks to see if the guess is within the parameters given
var validGuess = function (number) {
    return isNormalInteger(number) && number <= 100 && +number >= 1;
}
/*===================================================
FUNCTIONS TO HIDE AND SHOW THE GUESS BUTTON ENDS HERE
===================================================*/
/*==================================================
FUNCTIONS FOR RESPONSE FIELDS
===================================================*/
var response = document.getElementById("displayResult");
var waiting = function () {


         response.innerHTML = "<div class=waitingReply> WAITING FOR YOUR GUESS </div>";
            }

var answered = function () {
           response.innerHTML="<div class=correctReply> YOU GOT IT!! THE ANSWER IS " + secretNumber + "</div>";   
            }

var hotter = function (){
             response.innerHTML="<div class=hotReply> ITS GETTING HOTTER </div>";   
            }
var colder = function (){
             response.innerHTML="<div class=coldReply> ITS GETTING COLDER </div>";   
            }

var neitherHotNorCold = function () {
             response.innerHTML="<div class=neitherReply> ITS NEITHER HOT NOR COLD </div>";   
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
   	return false;
}

var getGuess = function (e) {
    e.preventDefault();
    number = document.getElementById('userGuess').value;

    if (validGuess(number)) {
    console.log( "number is "+ number);
    if (number == secretNumber){
       answered();
        hide();
        showPercentage(number, secretNumber);
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
            showPercentage(number, secretNumber);

         if (previousDiff > newDiff) {
                hotter();      
         }
        else if (previousDiff < newDiff) {
                colder(); 
        }
        else {
             neitherHotNorCold(); 
         }  
         previousGuess = number;
         console.log( "new previous is " +previousGuess);

    }
           
    }else{
        response.innerHTML ="<div class=hotReply> OOPS!!!! PLEASE ENTER A NUMBER BETWEEN 1 - 100 </div>";
        return;
    }

}

    var showPercentage = function (number, secretNumber) {

        var currentPercentage = Math.abs(100-( Math.floor(Math.abs(secretNumber - number)*1.5)));  
        // console.log("THE PERCENTAGE IS "+ currentPercentage + " %");
                $('#progressBar').animate({width:currentPercentage+"%"}, 1000);
            
        }

/*================================
EVENT HANDLERS
================================*/
addButton.addEventListener('click', initialize, false);
// guessButton.onclick = getGuess;
guessButton.addEventListener ('click', getGuess, false);