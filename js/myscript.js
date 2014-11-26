
var game = { 
        addButton : document.getElementById("newTask"),
        guessButton : document.getElementById('newGuess'),
        secretNumber : 0,
        number : 0,
        maxNumber : 100,
        previousGuess : 0,
        counter: 1,	
    	currentPercentage: 0,

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
             this.response.innerHTML="<div class=correctReply> You Found The Pirate's Secret Number after " + this.counter + " Guess(es) </div>";   
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
              
                this.previousGuess = 0; 
                this.counter=1;
             	this.waiting(); 
                this.show();
                //  i need to clear the input field
                this.secretNumber = Math.round(Math.random()*100);
                console.log("SECRET NUMBER: " + this.secretNumber);
               	return this.secretNumber;
               	return this.counter;
                },

        getGuess : function () {
                 //e.preventDefault();
                var secretNumber = this.secretNumber;
                     console.log("THE SECR IS " +secretNumber);
                var number = document.getElementById('userGuess').value;

               if (this.validGuess(number)) {
                    console.log( "number is "+ number);
                      if (number == secretNumber){
                            this.answered();
                            this.hide();
                            this.showPercentage(number, secretNumber);
                            //i want to use this space to clear the input whenever a new guess is opened
                            this.secretNumber = secretNumber;
                            return this.secretNumber; 

                        }else {
                            
                            var previousGuess = this.previousGuess;
                            var previousDiff = Math.floor(Math.abs(secretNumber - previousGuess));
                            var newDiff = Math.floor(Math.abs(secretNumber - number));
            // console.log('maxnumber is '+ this.maxNumber);  
            // console.log("previousDiff is "+previousDiff);
            // console.log(" new diff " + newDiff);
            // console.log("previousguess is "+previousGuess);
            // console.log("secretNumber is "+ secretNumber);
                            this.showPercentage(number, secretNumber);

                                if (previousDiff > newDiff) {
                                        this.hotter();      
                                 }
                                else if (previousDiff < newDiff) {
                                        this.colder(); 
                                }
                                else {
                                     this.neitherHotNorCold(); 
                                 }  
                             this.previousGuess = number;
                             console.log( "new previous is " +previousGuess);
                        } 
                        document.getElementById('userGuess').value="";
                        this.counter ++;

                        return this.counter;
               
                }else
                    {
                    this.response.innerHTML ="<div class=hotReply> OOPS!!!! PLEASE ENTER A NUMBER BETWEEN 0 - 100 </div>";
                    	document.getElementById('userGuess').value="";
                    	return ;
                    }
                    return false;
        },

        showPercentage : function (number, secretNumber) {
           currentPercentage = Math.abs(100-( Math.floor(Math.abs(secretNumber - number)*1.5)));  
             console.log("THE PERCENTAGE IS "+ currentPercentage + " %");
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


