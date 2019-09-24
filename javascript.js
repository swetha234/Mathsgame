var playing = false;
var score;
var action;
var timeremaining;
var correctAns;

//if we click on start button
document.getElementById("start").onclick = function(){
     if(playing==true){
         //if we are playing
         location.reload(); //reload the page
         
     }else{ 
         playing=true;
         //if we are not playing
         score = 0; // set score to 0
         document.getElementById("scorevalue").innerHTML= score;
         
         //show countdown box
         show("timeremaining");
         timeremaining = 60;
         
         document.getElementById("timeremainingvalue").innerHTML= timeremaining;
         
         hide("gameover");
         
         //change start  button to reset game
         
         document.getElementById("start").innerHTML= "Reset";
         
         //start countdown
         startCountDown();
         
         //generate a new question and multiple answers
         
         generateQandA();
         
         }
    
    
}


//clicking on answer box
for(i=1;i<5; i++){
document.getElementById("box" + i).onclick= function(){
    
    if(playing==true){
        
        if(this.innerHTML== correctAns){
            
            score++;
            
            document.getElementById("scorevalue").innerHTML = score;
            
            // hide or show try again and correct answer
            
            hide("wrong");
            show("correct");
            setTimeout(function(){
                 hide("correct");
            }, 1000)
            
            generateQandA();
            
        }else {
            
             show("wrong");
            hide("correct");
            setTimeout(function(){
                 hide("wrong");
            }, 1000)
            
        }
    }
}
}

function startCountDown(){
    action=setInterval(function(){
        
        timeremaining -= 1;
        
     document.getElementById("timeremainingvalue").innerHTML= timeremaining;
        
        if(timeremaining == 0){
            //game over pop up
            stopCountDown();
            
            show("gameover");
            
            document.getElementById("gameover").innerHTML= " <p>Game over..!</p><p>Your score is "+score+ ".</p>"
            
            hide("timeremaining");
            
            hide("correct");
            
            hide("wrong");
            
            playing = false;
            
            document.getElementById("start").innerHTML = "Start";
            
            
            
        
        }
        
    }, 1000);
}

function stopCountDown(){
    
    clearInterval(action);
}
//hide an element
function hide(Id){
    
    document.getElementById(Id).style.display="none";
}
//show an element
function show(Id){
    
    document.getElementById(Id).style.display="block";
}

function generateQandA(){
    
    var x = 1+ Math.round( 9*Math.random());
    var y = 1+ Math.round( 9*Math.random());
    correctAns = x*y;
    
    document.getElementById("question").innerHTML= x + "x" + y;
    
    var correctPosition = 1+ Math.round( 3*Math.random());
    
    document.getElementById("box" + correctPosition).innerHTML = correctAns;
    
    var answers= [correctAns];
    
    for (i=1 ; i<5 ; i++){
        
        if(i != correctPosition){
            var wrongAns;
            do{
               
             wrongAns = (1+ Math.round( 9*Math.random()))*(1+ Math.round( 9*Math.random()));
                } 
             while(answers.indexOf(wrongAns)> -1)
            document.getElementById("box" + i).innerHTML = wrongAns;
            
            answers.push(wrongAns);
            
        }
        
    }
    
    
}




















