

/*================================*
FUNCTIONS
================================*/

/*==================================================
FUNCTIONS TO HIDE AND SHOW THE GUESS BUTTON
===================================================*/
var game = { 
        addButton : document.getElementById("newTask"),
        guessButton : document.getElementById('newGuess'),
        secretNumber : 0,
        number : 0,
        maxNumber : 100,
        previousGuess : 0,

    

        show : function () {
            document.getElementById('newGuess').style.display = 'inline';
            //alert('hello');
            },

        hide : function () {
            document.getElementById('newGuess').style.display = 'none';
            //alert('hello');
            },

        isNormalInteger : function (number) {
            return (/^[1-9]\d*$/).test(number);
            },

        // Checks to see if the guess is within the parameters given
        validGuess : function (number) {
            return this.isNormalInteger(number) && number <= 100 && +number >= 1;
            },
        /*===================================================
        FUNCTIONS TO HIDE AND SHOW THE GUESS BUTTON ENDS HERE
        ===================================================*/
        /*==================================================
        FUNCTIONS FOR RESPONSE FIELDS
        ===================================================*/
        response : document.getElementById("displayResult"),
        waiting : function () {
             this.response.innerHTML = "<div class=waitingReply> WAITING FOR YOUR GUESS </div>";
                },

        answered :function () {
             this.response.innerHTML="<div class=correctReply> You Found The Pirates Secret Number At " + game.secretNumber + "</div>";   
                },

        hotter : function (){
             this.response.innerHTML="<div class=hotReply> ITS GETTING HOTTER </div>";   
                },

        colder : function (){
            this.response.innerHTML="<div class=coldReply> ITS GETTING COLDER </div>";   
                },

        neitherHotNorCold : function () {
            this.response.innerHTML="<div class=neitherReply> ITS NEITHER HOT NOR COLD </div>";   
                },
        /*********************
        GENERATE SECRET NUMBER AND INITILIZE GAME MODE
        **********************/


        initialize : function () {
              
                game.previousGuess = 0; 
             
                game.waiting(); 
                game.show();
                //  i need to clear the input field
                game.secretNumber = Math.round(Math.random()*100);
                console.log("SECRET NUMBER: " + game.secretNumber);
               	return game.secretNumber;
                },

        getGuess : function () {
                 //e.preventDefault();
                var secretNumber = game.secretNumber;
                 console.log("THE SECR IS " +secretNumber);
               number = document.getElementById('userGuess').value;

               if (game.validGuess(number)) {
                    console.log( "number is "+ number);
                      if (number == secretNumber){
                            game.answered();
                            game.hide();
                            game.showPercentage(number, secretNumber);
                            //i want to use this space to clear the input whenever a new guess is opened
                            game.secretNumber = secretNumber;
                            return game.secretNumber; 

                        }else {
                            
                            var previousGuess = game.previousGuess;
                            var previousDiff = Math.floor(Math.abs(secretNumber - previousGuess));
                            var newDiff = Math.floor(Math.abs(secretNumber - number));
            // console.log('maxnumber is '+ game.maxNumber);  
            // console.log("previousDiff is "+previousDiff);
            // console.log(" new diff " + newDiff);
            // console.log("previousguess is "+previousGuess);
            // console.log("secretNumber is "+ secretNumber);
                            game.showPercentage(number, secretNumber);

                                if (previousDiff > newDiff) {
                                        game.hotter();      
                                 }
                                else if (previousDiff < newDiff) {
                                        game.colder(); 
                                }
                                else {
                                     game.neitherHotNorCold(); 
                                 }  
                             game.previousGuess = number;
                             console.log( "new previous is " +previousGuess);
                        }
               
                }else
                    {
                    this.response.innerHTML ="<div class=hotReply> OOPS!!!! PLEASE ENTER A NUMBER BETWEEN 1 - 100 </div>";
                    return ;
                    }
                    return false;
        },

        showPercentage : function (number, secretNumber) {
            var currentPercentage = Math.abs(100-( Math.floor(Math.abs(secretNumber - number)*1.5)));  
            // console.log("THE PERCENTAGE IS "+ currentPercentage + " %");
                    $('#progressBar').animate({width:currentPercentage+"%"}, 1000);
           
         return false;    
         }, 
        
}; // this is the end of the object
/*================================
EVENT HANDLERS
================================*/
game.hide();
game.addButton.addEventListener('click', function() {
    game.initialize();
} , false);
// guessButton.onclick = getGuess;
game.guessButton.addEventListener ('click',function(e) {
    e.preventDefault();
    game.getGuess();
}, false);


