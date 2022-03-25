
function offer()
{
    var line = document.getElementById('line-3');
    line.style.visibility = 'visible';
    
    var quit = document.getElementById('quit');
    quit.style.visibility = 'visible';
        
    var remain = document.getElementById('remain');
    remain.style.visibility = 'visible';
    
    var offer = document.getElementById('offer');
    offer.style.visibility = 'hidden';
    
    var line = document.getElementById('line');
    line.style.visibility = 'visible';
                  
    var lineFor = document.getElementById('line-14');
    lineFor.style.visibility = 'visible';     
             
    var enter = document.getElementById('enter');
    enter.style.visibility = 'visible';     
             
    var proceed = document.getElementById('proceed');
    proceed.style.visibility = 'visible'; remain.style.visibility = 'visible'; 
    
    document.getElementById("quit").disabled = true;
    document.getElementById("remain").disabled = true;
    
}


function ProceedOption()
{
     var input= document.getElementById('enter').value;
    
     if(input == "")
        {
            alert("Text field cannot be empty");
        }
    
     else if(input == "1")
         {
             typewrite("update", "Status: Health: 50% | Money: $2000", false, 50);
    
             var quit = document.getElementById('quit');
             quit.remove();
    
             var remain = document.getElementById('remain');
             remain.remove();
             
             var lineFor = document.getElementById('line-14');
             lineFor.remove(); 
              
             var line = document.getElementById('line');
             line.remove();
             
             var enter = document.getElementById('enter');
             enter.remove();
             
             var proceed = document.getElementById('proceed');
             proceed.remove();
    
             var field = document.getElementById('field');
             field.style.visibility = 'visible'
    
             var start = document.getElementById('start');
             start.style.visibility = 'visible'
             
             var start = document.getElementById('offer');
             start.style.visibility = 'visible'
    
             document.getElementById("offer").innerHTML = ("Decision made:"); 
    
             typewrite("line-3", "You decided to quit the job...  ", false, 50);
    
             typewrite("line-4", "You can go back to the fields or return to the start.", false, 30);
             
             typewrite("endd", "-------------- Moderate end --------------", false, 80);
             
             
         }
    
    else if(input == "2")
         {
               var whole = document.getElementById('whole');
               whole.remove();
    
               typewrite("end", "-------------- Not a good end --------------", false, 80);
    
               typewrite("update", "Status: Health: 30% | Money: $2300", false, 50);
    
               typewrite("line-1", "As you keep trying your best, you can't help but continue to realize that you weren't born to be a cowboy.", false, 20);
    
               typewrite("line-2", "Shockingly! you met with an accident while riding horse and unfortunately your leg is broken. Also your boss fires you unwilling to cover the cost of your medical bills, and some of your earning were also used for treatment.", false, 20);
               typewrite("line-5", " You return home with a broken leg and a broken dream. Better luck next time.", false, 20);
    
               var leg = document.getElementById('leg-image');
               leg.style.visibility = 'visible';
    
               var cowboy = document.getElementById('cowboy-image');
               cowboy.remove();
         }
    
     else
        {
              alert("Warning! Choose only 1 or 2 to proceed.");
        }
}

function MoveToAnderson()
{  
    var line = document.getElementById('line');
    line.style.visibility = 'visible';
    
     var george = document.getElementById('remove-george');
     george.remove();
    
     typewrite("friend", "You are friends with: Anderson ", false, 50);
    
    var anderson = document.getElementById('anderson-image');
    anderson.style.visibility = 'visible';
    
    typewrite("line-7", "His background is similar to yours, and the two of you found comfort in talking with each other.", false, 20);
    
    typewrite("line-8", "One day, Anderson asks you: Would you like to invest in a farm together?", false, 30);
    
    typewrite("line-9", "Do you trust your new friend? Oppportunity is precious!", false, 40);
    
    
    var trust = document.getElementById('trust');
    trust.style.visibility = 'visible';
    
    var doNot = document.getElementById('do-not');
    doNot.style.visibility = 'visible';
    
}

function TrustAnderson()
{
    var whole = document.getElementById('whole');
    whole.remove();
    
    typewrite("update", "Status: Health: 100% | Money: $2500", false, 50);
    
    typewrite("line-1", "You decided to invest and you made profit.", false, 40);
    typewrite("line-11", "Congrats! You earned 1000 dollars.", false, 40);
    typewrite("line-12", "Hungry for more profit, Anderson asks you to join him in another investment. This time, you will need to invest $1,000 from your balance.", false, 30);
    
    typewrite("line-13", "Would you take risk for earning more money?", false, 100);
    
        
    var image = document.getElementById('invest-image');
    image.style.visibility = 'visible';
    
    var button = document.getElementById('invest-money');
    button.style.visibility = 'visible';
    
}

function InvestMoney()
{
    typewrite("line-1", "If you take the risk, you may lose everything and have to go back to the fields.", false, 15);

    var hide = document.getElementById('hide');
    hide.remove();
    
    var lineThirteen = document.getElementById('line-13');
    lineThirteen.style.visibility = 'visible';
    
    var lineFourteen = document.getElementById('line-14');
    lineFourteen.style.visibility = 'visible';
    
    var enter = document.getElementById('enter');
    enter.style.visibility = 'visible';
    
    var reset = document.getElementById('reset');
    reset.style.visibility = 'visible';
    
    var submit = document.getElementById('confirm');
    submit.style.visibility = 'visible';
}


function ConfirmInvestment()
{
    var input= document.getElementById('enter').value;
    if(input == "")
        {
            alert("Field cannot be empty");
        }
    else if(input == "yes")
        { 
            var invest = document.getElementById('yes-invest');
            invest.remove();
            
            typewrite("update", "Status: Health: 100% | Money: -$1000", false, 50);
            
            typewrite("line-1", "What you never expected happened - Anderson took all your money and left you with not single penny. He betrayed you and have seemingly vanished.", false, 25);
            
            typewrite("line-13", "You are devastated, and lost all your fortune.", false, 45);
            
            typewrite("line-15", "You go home with a heavy heart, and debt that will take you years to pay off. Sometimes, greed can override friendships. Better luck next time.", false, 30);
            
            var line = document.getElementById('line-end');
            line.style.visibility = 'visible';
            
            typewrite("money", "Money Debt: -$1000", false, 90);
            typewrite("end", "-------------- Worst ending --------------", false, 80);
            
            var successMoney = document.getElementById('success-money');
            successMoney.remove();
        }
    else if(input == "no")
        { 
            var invest = document.getElementById('yes-invest');
            invest.remove();
            
            typewrite("update", "Status: Health: 100% | Money: $7500", false, 50);
            
            var line = document.getElementById('line-13');
            line.remove();
            
             typewrite("line-1", "You made the right decision! Anderson was overconfident. The new farm you were going to invest in burned down in a fire.", false, 25); 
              
             typewrite("line-15", "He has learned his lesson and the two of you continue to make intelligent investments, gradually making more money.", false, 20);
            
             typewrite("line-16", "Soon, you will have enough money to pay off your father's debts", false, 20);
            
             typewrite("success-money", "Money Earned: $7500", false, 90);
             typewrite("success-end", "------- THE END (2nd best ending) ------- ", false, 80);
            
            var line = document.getElementById('line-end');
            line.style.visibility = 'visible';
            
        }
    
    else if(input== "YES" || input == "Yes" ||input== "NO" || input == "No")
        {
             alert("Warning! Words are case sensitive. So write them all in lowercase.");
        }
    else
        {
            alert("Type yes or no only");
        }
}

function DontTrustAnderson()
{
    var whole = document.getElementById('whole');
    whole.remove();
    
    var hide = document.getElementById('hide');
    hide.remove();
    
    var invest = document.getElementById('yes-invest');
    invest.remove();
    
    typewrite("update", "Status: Health: 100% | Money: $2700", false, 50);
    
    typewrite("line-1", "Anderson respects your decision.", false, 40);
    
    typewrite("line-15", "Maybe you be able to achieve that goal one day. But for now, you need to keep farming and try to save up your money. This may take years, or decades.", false, 40);
    
    typewrite("line-16", "Good luck and work hard!", false, 80);
    
    typewrite("success-money", "Money Earned: $2700", false, 90);
    typewrite("success-end", "----------- Moderate ending ---------- ", false, 80);
    
     var line = document.getElementById('line-end');
    line.style.visibility = 'visible';
    
}

function ConfirmChoosingFriend()
{
    var input= document.getElementById('choose-friend').value;
    if(input == "")
        {
            alert("Field cannot be empty");
        }
    else if(input == "Anderson" || input == "anderson" || input == "ANDERSON")
        { 
           var line = document.getElementById('line');
           line.style.visibility = 'visible';
    
           var george = document.getElementById('remove-george');
           george.remove();
    
           var george = document.getElementById('george');
           george.remove();
    
           typewrite("friend", "You are friends with: Anderson ", false, 50);
    
            var anderson = document.getElementById('anderson-image');
            anderson.style.visibility = 'visible';
    
            typewrite("line-7", "His background is similar to yours, and the two of you found comfort in talking with each other.", false, 20);
    
            typewrite("line-8", "One day, Anderson asks you: Would you like to invest in a farm together?", false, 30);
    
            typewrite("line-9", "Do you trust your new friend? Oppportunity is precious!", false, 40);
    
    
            var trust = document.getElementById('trust');
            trust.style.visibility = 'visible';
    
            var doNot = document.getElementById('do-not');
            doNot.style.visibility = 'visible';
    
            document.getElementById("confirm-choosing-friend").disabled = true;
            var more = document.getElementById('confirm-choosing-friend');
            more.style.opacity = '50%';
        }
    
    else if(input == "George" || input == "george" || input == "GEORGE")
        {
             var line = document.getElementById('line');
             line.style.visibility = 'visible';
    
             var anderson = document.getElementById('anderson');
             anderson.remove();
    
             typewrite("friend", "You are friends with: George ", false, 50);
     
             var george = document.getElementById('george-image');
             george.style.visibility = 'visible';
    
             typewrite("line-7", "George proves to be an interesting person to talk to. Her family is rather successful as they come from a line of wealthy landlords.", false, 20);
    
              typewrite("line-8", "You gradually begin to realize that being with him have led to you spending a lot of money. In fact, everything you've earned so far is now gone!", false, 30);
    
              typewrite("line-9", "You decide that George is not a good influence.", false, 40);
    
              var move = document.getElementById('move-george');
             move.style.visibility = 'visible';
    
             document.getElementById("george").disabled = true;
             var more = document.getElementById('george');
             more.style.opacity = '50%';
             
            document.getElementById("confirm-choosing-friend").disabled = true;
            var more = document.getElementById('confirm-choosing-friend');
            more.style.opacity = '50%';
        }
   
    else
        {
            alert("You must write either Anderson or George");
        }
}

function MoreAbout()
{
    typewrite("line-4", "- Anderson is a hardworking and honest guy.", false, 50);
    typewrite("line-5", "- George is a smart and educated person.", false, 50);
    
    var question = document.getElementById('line-6');
    question.style.visibility = 'visible';
    
    var confrimFriend = document.getElementById('confirm-choosing-friend');
    confrimFriend.style.visibility = 'visible';
    
    document.getElementById("more").disabled = true;
    var more = document.getElementById('more');
    more.style.opacity = '50%';
    
    var enter = document.getElementById('choose-friend');
    enter.style.visibility = 'visible';
}


function ClerkStatus()
{
       typewrite("update", "Status: Health: 50% | Money: $9500", false, 50);
    
       var clerk = document.getElementById('clerk-status');
       clerk.remove();
       
       var wholeData= document.getElementById('whole');
       wholeData.remove();
    
       var clerkImage = document.getElementById('clerk-image');
       clerkImage.remove();

      typewrite("heading-four", "Congratulations! It was a happy ending.", false, 50);
      typewrite("line-1", "You have enough money to pay off your father's debits. Also your boss give you one month holiday in order to rest and to meet your family. You are really happy and overwhelmed. ", false, 20);
      typewrite("money", "Money Earned: $9500", false, 50);
      typewrite("end", "---------------- Best End ----------------", false, 50);
}

function ClerkJob()
{
      var proceedToStart = document.getElementById('clerk-job');
      proceedToStart.remove();
      document.getElementById("journey-start").innerHTML = ("Here you go ->"); 
     
      typewrite("line-3", "After a couple of months working as a clerk, you remember your ambition of earning money. You consider asking for a raise.", false, 20);
    
      
       var type = document.getElementById('line-4');
       type.style.visibility = 'visible';
      
       var ask = document.getElementById('type-ask');
       ask.style.visibility = 'visible';
    
       var reset = document.getElementById('reset');
       reset.style.visibility = 'visible';
    
       var submit = document.getElementById('submit');
       submit.style.visibility = 'visible';
    
}

function typewrite (target, text, loop, speed) {
    
  target = document.getElementById(target);
  if (speed === undefined) { speed = 200; }
  if (loop === undefined) { loop = false; }
 
  let pointer = 2;
  let timer = setInterval(function(){
    pointer++;
    if (pointer <= text.length) {
      target.innerHTML = text.substring(0, pointer);
    } else {
      if (loop) { pointer = 0; }
      else { clearInterval(timer); }
    }
  }, speed);
}

function AskForRaise()
{
    alert("Hint: Words can be increase, increment, heave or upraise.");
     var raise = document.getElementById('raise');
     raise.remove();         
}

function DisplayError()
{
    var input= document.getElementById('type-ask').value;
    if(input == "")
        {
            alert("Field cannot be empty");
        }
    else if(input == "raise" || input == "increase" || input == "increment"|| input == "heave"|| input == "upraise")
        {   
            document.getElementById("reset").disabled = true;
            var more = document.getElementById('reset');
            more.style.opacity = '50%';
    
            document.getElementById("submit").disabled = true;
            var more = document.getElementById('submit');
            more.style.opacity = '50%';
            
            document.getElementById("line-4").disabled = true;
            var lineFour = document.getElementById('line-4');
            lineFour.style.opacity = '50%';
        
            var line = document.getElementById('line');
            line.style.visibility = 'visible';
            
            var lineOne = document.getElementById('line-9');
            lineOne.style.visibility = 'visible';
            
            typewrite("line-5", "Clerk", false, 50);
            
            var option = document.getElementById('options');
            option.style.visibility = 'visible';
            
            typewrite("line-6", "Option 1: Quit the job and find the another one", false, 50);
            typewrite("line-7", "Option 2: Continue Working Diligently", false, 50);
            typewrite("line-8", "Option 3: Ask for a Promotion instead", false, 50);
            typewrite("line-9", "Enter values 1, 2 or 3 and click confirm:", false, 50);
            
            var optionOne = document.getElementById('choose-one');
            optionOne.style.visibility = 'visible';
            
            var button = document.getElementById('Option-1');
            button.style.visibility = 'visible';
            
            var optionTwo = document.getElementById('Option-2');
            optionTwo.style.visibility = 'visible';
            
            var optionThree = document.getElementById('Option-3');
            optionThree.style.visibility = 'visible'; 
            
            document.getElementById("raise").disabled = true;
        }
    
else if(input == "Raise" || input == "RAISE" || input == "Increase" || input == "INCREASE" || input == "Increment" || input == "INCREMENT" ||input == "HEAVE" || input == "Heave" ||input == "UPRAISE" || input == "Upraise")
            {
                  alert("Warning! Words are case sensitive. So write them all in lowercase.");
            }

    else
        {
            alert("Note: Type word raise or a synonym of it.");
        }
    
}

function OptionOne()
{
    var input= document.getElementById('choose-one').value;
    if(input == "")
        {
            alert("Number field cannot be empty");
        }
    
     else if (input == "1")
        {   
            var clerkStatus = document.getElementById('clerk-status');
            clerkStatus.style.visibility = 'hidden'; 
            
            var lineTwelve = document.getElementById('line-12');
            lineTwelve.style.visibility = 'hidden';
            
            typewrite("line-10", "You made a bad decision! After quitting your job, you didn't find another one and lost all your money.", false, 25);
            typewrite("line-11", "------------  Bad End to the Story ------------", false, 30);
            
               
            document.getElementById("Option-1").disabled = true;
            var more = document.getElementById('Option-1');
            more.style.opacity = '50%';
            
            typewrite("update", "Status: Health: 60% | Money: $0", false, 50);
            
            typewrite("zeromoney", "Money Left: $0", false, 90)
            
            var goIn = document.getElementById('go-in');
            goIn.style.visibility = 'hidden'; 
            
            var goOut = document.getElementById('go-out');
            goOut.style.visibility = 'hidden'; 
        }
    
    else if(input == "2")
        {   
            var zeromoney = document.getElementById('zeromoney');
            zeromoney.remove(); 
            
            var clerkStatus = document.getElementById('clerk-status');
            clerkStatus.style.visibility = 'visible'; 
            
            typewrite("line-10", "You chose to remain a clerk and your income is stable now. Your boss was impressed with your work and gave you promotion and added some bonuses to your income.", false, 25);
            
            typewrite("line-11", "------------  Best End To The Story  ------------", false, 30);
            
            typewrite("line-12", "Scroll up and click update to see the money you earned....", false, 25);
            
            document.getElementById("Option-1").disabled = true;
            var more = document.getElementById('Option-1');
            more.style.opacity = '50%';
            
            var lineTwelve = document.getElementById('line-12');
            lineTwelve.style.visibility = 'visible';
            
            typewrite("update", "Status: Health: 100% | Money: $1000", false, 20);
            
        }
    
     else if (input == "3")
        {
            var zeromoney = document.getElementById('zeromoney');
            zeromoney.remove(); 
            
            var clerkStatus = document.getElementById('clerk-status');
            clerkStatus.style.visibility = 'hidden'; 
            
            var line = document.getElementById('line-11');
            line.remove();
            
            var goIn = document.getElementById('go-in');
            goIn.style.visibility = 'visible'; 
            
            var goOut = document.getElementById('go-out');
            goOut.style.visibility = 'visible'; 
            
            typewrite("line-10", "After working up the courage to confront your boss, you carefully bring up the topic one day when you are about to leave work.", false, 25);
            typewrite("line-12", "Do you want to walk inside office and talk to him?", false, 25);
            
            document.getElementById("Option-1").disabled = true;
            var more = document.getElementById('Option-1');
            more.style.opacity = '50%';
            
            var lineTwelve = document.getElementById('line-12');
            lineTwelve.style.visibility = 'visible';
            
            typewrite("update", "Status: Health: 100% | Money: $1000", false, 20);
            
        }
    
     else if(input < 1) 
    {
         alert("Warning! You are going beyond the minimum value.");
    }
    
    else if(input > 3) 
    {
         alert("Warning! You are exceeding the maximum value.");
    }
    
    else if((input > 1 && input < 2) || (input > 2 && input < 3)) 
    {
         alert("Note! No middle values are accepted. ");
    }
    
    else 
    {
        alert("Warning! Enter only 1, 2 or 3 to proceed.");
    }
    
    
}

function GoIn()
{
      var wholeData= document.getElementById('whole');
      wholeData.remove();
    
      var clerkImage = document.getElementById('clerk-image');
      clerkImage.remove();
    
      typewrite("heading-four", "Congratulations on your promotion!", false, 50);
      typewrite("line-1", "Luckily, your boss was in a much better mood this time. Sometimes you just need to seize whatever opportunity you are given. Your future is bright! You have earned 5600 dollars.", false, 20);
       
      typewrite("money", "Money Earned: $5600", false, 90);
      typewrite("end", "------------ 3rd best ending ------------", false, 80);
    
      typewrite("update", "Status: Health: 80% | Money: $5600", false, 50);
}
function GoOut()
{
    alert("You have to take risk. So go in the office.");
}

function Out()
{
    alert("You need money. So go in and sell your product.");
}

function GoDown()
{
    var line = document.getElementById('line');
    line.style.visibility = 'visible'; 
            
    var img = document.getElementById('knife-img');
    img.style.visibility = 'visible';
    
    typewrite("line-3", "As soon as you enter the basement with your product, you notice that the basement is very dark. Uh oh. You lose sight of your client briefly, but then notices him not far away from you thanks to the light reflecting off of a metal surface.", false, 25);
    
    typewrite("line-4", "Wait a minute...what is it that he is holding...a KNIFE!", false, 90);
    
    typewrite("line-5", "It's dark and you see him starting to run towards you. Do you run back upstairs or choose to fight for your life?", false, 50);
    
    var decide = document.getElementById('decide-quick');
    decide.style.visibility = 'visible';
    
    document.getElementById("go-down").disabled = true;
    var more = document.getElementById('go-down');
    more.style.opacity = '50%';
    
    document.getElementById("go-out").disabled = true;
    var more = document.getElementById('go-out');
    more.style.opacity = '50%';
}

function Quickthought()
{
     var fight = document.getElementById('fight');
     fight.style.visibility = 'visible'; 
    
     var flee = document.getElementById('flee');
     flee.style.visibility = 'visible'; 
}
function Fight()
{
    var hide = document.getElementById('hide');
    hide.remove(); 
    
    typewrite("line-1", "As soon as you hit the customer, you hear the knife drop down to the floor, and you quickly react by knocking it away from both of you.", false, 20);
    
    typewrite("line-2", "Either way, you should make a decision. Do you yell for the Police and get him arrested, or run away?", false, 30);
    
     var arrest = document.getElementById('arrest');
     arrest.style.visibility = 'visible'; 
    
     var up = document.getElementById('up');
     up.style.visibility = 'visible'; 
    
     var headingFive = document.getElementById('headingFive');
     headingFive.style.visibility = 'visible'; 
}

function Flee()
{
    var hide = document.getElementById('hide');
    hide.remove();
    
    var lineSix = document.getElementById('line-6');
    lineSix.remove(); 
    
    var lineTwo = document.getElementById('line-2');
    lineTwo.remove(); 
    
    var lineSeven = document.getElementById('line-7');
    lineSeven.remove(); 
    
    var buttons = document.getElementById('buttons');
    buttons.remove(); 
    
    var lineEight = document.getElementById('line-8');
    lineEight.style.visibility = 'visible'; 
    
     typewrite("line-1", "You ran away from the home and you didn't get to know who that person really was.", false, 50);
    
     typewrite("line-8", "Being scared you were unable to explain the situation to your fellow members. And you were fired by the company as you failed to sell enough products.", false, 30);

     var update = document.getElementById('clerk-status');
     update.remove(); 
    
     var status = document.getElementById('salesman-status');
     status.style.visibility = 'visible'; 
    
      var flee = document.getElementById('flee-update');
     flee.style.visibility = 'visible'; 
    
     var salesman = document.getElementById('salesman-update');
     salesman.remove(); 
     
    document.getElementById("up").disabled = true;
    var more = document.getElementById('up');
    more.style.opacity = '50%';
}

function FleeMoneyUpdate()
{
    
     var input= document.getElementById('salesman-status').value;
     if(input == "")
        {
            alert("Text field cannot be empty");
        }
    
    else if(input == "update" || input == "upgrade")
            {
                
                 var salesman = document.getElementById('salesman-status');
                 salesman.remove();
                
                 var fleeupdate = document.getElementById('flee-update');
                 fleeupdate.remove();
                
                 var lineEight = document.getElementById('line-8');
                 lineEight.remove();
                
                 typewrite("update", "Status: Health: 55% | Money: $2700", false, 50);
                
                  typewrite("line-1", "Congrats! Your journey had came to an end. It was an unexpected end but you could make it good if you had arrested that person. ", false, 25);
                
                  typewrite("line-11", "Money Earned: $2700", false, 50);
                
                  typewrite("line-9", "--------------- Moderate ending ---------------", false, 50);
            
            }
    
     else if(input == "Update" || input == "UPDATE" || input == "Upgrade" || input == "UPGRADE")
            {
                  alert("Warning! Word is case sensitive. So write it in lowercase.");
            }

    else {
        alert("Note: Write update or a synonym of it.");
    }
}

function Arrest()
{   
       
    var lineSix = document.getElementById('line-6');
    lineSix.style.visibility = 'visible'; 
    
    var lineSeven = document.getElementById('line-7');
    lineSeven.style.visibility = 'visible'; 
    
    var update = document.getElementById('clerk-status');
    update.style.visibility = 'visible'; 
    
    var arrest = document.getElementById('arrest');
    arrest.style.visibility = 'visible'; 
    
     var up = document.getElementById('up');
     up.remove();
    
     typewrite("line-8", "Your courage and dedication has paid off. But in the end, everything worked out well. You have a bright future ahead of you. Congrats!", false, 60);
    
    var status = document.getElementById('salesman-status');
    status.style.visibility = 'visible'; 
    
    document.getElementById("arrest").disabled = true;
    var more = document.getElementById('arrest');
    more.style.opacity = '50%';
}

function UpdateMoney()
{
    
    var input= document.getElementById('salesman-status').value;
    if(input == "")
        {
            alert("Text field cannot be empty");
        }
    
    else if(input == "update" || input == "upgrade")
            {
                    
                 typewrite("update", "Status: Health: 70% | Money: $7500", false, 50);
    
                 var status = document.getElementById('clerk-status');
                 status.remove();
                
                 var salesman = document.getElementById('salesman-status');
                 salesman.remove();
                
                  var fleeupdate = document.getElementById('flee-update');
                  fleeupdate.remove();
                
                
                 var update = document.getElementById('salesman-update');
                 update.remove();
                
                 typewrite("line-11", "Money Earned: $7500", false, 50);
    
                 typewrite("line-9", "--------------- 2nd best ending ---------------", false, 50);
                
                 var lineSix = document.getElementById('line-6');
                 lineSix.remove();
                
                 var lineEight = document.getElementById('line-8');
                 lineEight.remove();
                
                 var buttons = document.getElementById('buttons');
                 buttons.remove();
                
                 var lineTwo = document.getElementById('line-2');
                 lineTwo.remove();
                
                 var lineSeven = document.getElementById('line-7');
                 lineSeven.remove();
                
                  var lineTen = document.getElementById('line-10');
                 lineTen.remove();
                
                  typewrite("line-1", "It was a good end to the story. As you helped the police to find the killer, they rewared you with $6500.", false, 25);
                
            }   
    
    else if(input == "Update" || input == "UPDATE" || input == "Upgrade" || input == "UPGRADE")
            {
                alert("Warning! Word is case sensitive. So write it in lowercase.");
            }

    else 
    {
         alert("Note: Write update or a synonym of it.");
    }
}

function UpdateMoneyTwo()
{
     var input= document.getElementById('salesman-status').value;
     if(input == "")
        {
            alert("Text field cannot be empty");
        }
    
    else if(input == "update" || input == "upgrade")
            {
                
                 typewrite("update", "Status: Health: 55% | Money: $2700", false, 50);
                
                 var salesman = document.getElementById('salesman-status');
                 salesman.remove();
                
                 var update = document.getElementById('salesman-update');
                 update.remove();
                
                 var fleeupdate = document.getElementById('flee-update');
                  fleeupdate.remove();
                
                  var lineSix = document.getElementById('line-6');
                 lineSix.remove();
                
                 var lineEight = document.getElementById('line-8');
                 lineEight.remove();
                
                 var buttons = document.getElementById('buttons');
                 buttons.remove();
                
                 var lineTwo = document.getElementById('line-2');
                 lineTwo.remove();
                
                  typewrite("line-1", "Congrats! Your journey had came to an end. It was an unexpected end but you could make it good if you had arrested that person. ", false, 25);
                
                  typewrite("line-11", "Money Earned: $2700", false, 50);
                
                  typewrite("line-9", "--------------- Moderate ending ---------------", false, 50);
            }
    
      else if(input == "Update" || input == "UPDATE" || input == "Upgrade" || input == "UPGRADE")
            {
                    alert("Warning! Word is case sensitive. So write it in lowercase.");
            }


    else {
        alert("Note: Write update or a synonym of it.");
    }
}

function RunAway()
{
     var arrest = document.getElementById('arrest');
     arrest.remove();
    
    var lineSix = document.getElementById('line-6');
    lineSix.style.visibility = 'visible'; 
    
    var lineSeven = document.getElementById('line-7');
    lineSeven.remove(); 
    
    var lineEight = document.getElementById('line-8');
    lineEight.style.visibility = 'visible'; 
    
     typewrite("line-6", "You ran away from the home and you didn't get to know who that person really was.", false, 50);
    
     typewrite("line-8", "Being scared you were unable to explain the situation to your fellow members. And you were fired by the company as you failed to sell enough products.", false, 30);

     var update = document.getElementById('clerk-status');
     update.remove(); 
    
     var status = document.getElementById('salesman-status');
     status.style.visibility = 'visible'; 
    
    var salesman = document.getElementById('salesman-update');
     salesman.style.visibility = 'visible'; 
    
    document.getElementById("up").disabled = true;
    var more = document.getElementById('up');
    more.style.opacity = '50%';
    
}

function display()
{
    var playerName = prompt("Enter your name");
    var optionYes = document.getElementById('yes');
    var optionNo = document.getElementById('no');
    
    if(playerName=="" || playerName== null)
        {
             alert("Name must be filled out");   
             return false;
        }
    
   
    else if(playerName>=0 || playerName <=0)
        {
             alert("Name must be written in alphabets");   
             return false;  
        }
    
    else if(playerName.match("^[A-Za-z]+$"))
        {
            document.getElementById("name").innerHTML = (""+playerName+","+" "+"are you ready?"); 
            document.getElementById("player").innerHTML = (""+playerName+ " "+ "is playing..."); 
            optionYes.style.visibility = 'visible';
            optionNo.style.visibility = 'visible'; 
        }
    else
        {
             alert("Name must be written in alphabets only");   
             return false;  
        }
    
}

function sayHello()
{
      var lineOne = document.getElementById('line-1');
      var lineTwo = document.getElementById('line-2');
      var lineThree = document.getElementById('line-3');
      var lineFour = document.getElementById('line-4');
      
      lineOne.style.visibility = 'visible';
      lineTwo.style.visibility = 'visible';
      lineThree.style.visibility = 'visible';
      lineFour.style.visibility = 'visible';
    
     var ignore = document.getElementById('ignore');
     ignore.style.visibility = 'hidden';
    
     var talk = document.getElementById('talk');
     talk.style.visibility = 'visible';
    
    document.getElementById("sayhello").disabled = true;
    var more = document.getElementById('sayhello');
    more.style.opacity = '50%';
}

function talk()
{
    var lineFive = document.getElementById('line-5');
    lineFive.style.visibility = 'visible';
    
    var lineSix = document.getElementById('line-6');
    lineSix.style.visibility = 'visible';
    
     var guess = document.getElementById('guess');
    guess.style.visibility = 'visible';
    
     document.getElementById("talk").disabled = true;
    var more = document.getElementById('talk');
    more.style.opacity = '50%';
}


function guess()
{
    var buttons = document.getElementById('years');
    buttons.style.visibility = 'visible';
    
    document.getElementById("guess").disabled = true;
    var more = document.getElementById('guess');
    more.style.opacity = '50%';
}

function seven()
{
     var buttons = document.getElementById('seven');
     document.getElementById("sevenyears").innerHTML = ("- Close! it is actually 8 years from now.");
    
    var eight = document.getElementById('eight');
     eight.style.visibility = 'hidden';
    
    var lineSeven = document.getElementById('line-7');
    lineSeven.style.visibility = 'visible';
    
    var lineEight = document.getElementById('line-8');
    lineEight.style.visibility = 'visible';
    
    var lineNine = document.getElementById('line-9');
    lineNine.style.visibility = 'visible';
    
    var lineTen = document.getElementById('line-10');
    lineTen.style.visibility = 'visible';
    
      var explain = document.getElementById('explain');
    explain.style.visibility = 'visible';
}

function eight()
{
     var buttons = document.getElementById('eight');
     document.getElementById("sevenyears").innerHTML = ("- Correct! its has been 8 years. So long time no see."); 
    
    var seven = document.getElementById('seven');
     seven.style.visibility = 'hidden';
    
     var lineSeven = document.getElementById('line-7');
    lineSeven.style.visibility = 'visible';
    
    var lineEight = document.getElementById('line-8');
    lineEight.style.visibility = 'visible';
    
    var lineNine = document.getElementById('line-9');
    lineNine.style.visibility = 'visible';
    
    var lineTen = document.getElementById('line-10');
    lineTen.style.visibility = 'visible';
    
    var explain = document.getElementById('explain');
    explain.style.visibility = 'visible';
    
}

function explain()
{
     var lineEleven = document.getElementById('line-11');
    lineEleven.style.visibility = 'visible';
    
    var lineTwelve = document.getElementById('line-12');
    lineTwelve.style.visibility = 'visible';
    
    var lineThird = document.getElementById('line-13');
    lineThird.style.visibility = 'visible';
    
    var lineFour = document.getElementById('line-14');
    lineFour.style.visibility = 'visible';
    
     var lineNine = document.getElementById('line-15');
    lineNine.style.visibility = 'visible';
    
    var lineTen = document.getElementById('line-16');
    lineTen.style.visibility = 'visible';
    
    var convince = document.getElementById('convince');
    convince.style.visibility = 'visible';
    
    document.getElementById("explain").disabled = true;
    var more = document.getElementById('explain');
    more.style.opacity = '50%';
}

function convince()
{
     var lineSeven = document.getElementById('line-17');
    lineSeven.style.visibility = 'visible';
    
    var lineEighteen = document.getElementById('line-18');
    lineEighteen.style.visibility = 'visible';
    
}

function ignore()
{
    alert("You can't ignore him. Instead say Hello!");
    
    var ignore = document.getElementById('ignore');
    ignore.style.visibility = 'hidden';
}


function north()
{
      var decision = document.getElementById('ready');
      document.getElementById("ready").innerHTML = ("Are you sure you want to make this decision?"); 
    
      var sureDecision = document.getElementById('ready');
      var yes = document.getElementById('yess');
      var no = document.getElementById('noo');
    
      sureDecision.style.visibility = 'visible';
      yes.style.visibility = 'visible';
      no.style.visibility = 'visible';
    
      var yesSouth = document.getElementById('yes-south');
       yesSouth.style.visibility = 'hidden';
      var noSouth = document.getElementById('no-south');
      noSouth.style.visibility = 'hidden';
}

function south()
{
      var decision = document.getElementById('ready');
      document.getElementById("ready").innerHTML = ("Are you sure you want to make this decision?"); 
    
      var sureDecision = document.getElementById('ready');
      var yesSouth = document.getElementById('yes-south');
      var noSouth = document.getElementById('no-south');
    
      sureDecision.style.visibility = 'visible';
      yesSouth.style.visibility = 'visible';
      noSouth.style.visibility = 'visible';
    
      var yes = document.getElementById('yess');
      yes.style.visibility = 'hidden';
      var no = document.getElementById('noo');
      no.style.visibility = 'hidden';
    
}


function yess()
{
     var yes = document.getElementById('yess');
     yes.remove();
    
     var no = document.getElementById('noo');
     no.remove();
    
     var southDirection = document.getElementById('south');
     southDirection.remove();
    
    var northDirection = document.getElementById('north');
     northDirection.remove();
    
     alert("Now you can go to north only");
    
     var decision = document.getElementById('ready');
     document.getElementById("ready").innerHTML = ("Click to go north..."); 
    
     var back = document.getElementById('back');
     back.style.visibility = 'visible';
    
     
     var newNorth = document.getElementById('new-north');
     newNorth.style.visibility = 'visible';
}

function yessouth()
{
     var yes = document.getElementById('yes-south');
     yes.remove();
    
     var no = document.getElementById('no-south');
     no.remove();
    
     var southDirection = document.getElementById('south');
     southDirection.remove();
    
    var northDirection = document.getElementById('north');
     northDirection.remove();
    
    var newDirection = document.getElementById('new-north');
     newDirection.remove();
    
     alert("Now you can go to south only");
    
     var decision = document.getElementById('ready');
     document.getElementById("ready").innerHTML = ("Click to go south..."); 
    
     var back = document.getElementById('back');
     back.style.visibility = 'visible';
    
     
     var newNorth = document.getElementById('new-south');
     newNorth.style.visibility = 'visible';
}

function noo()
{
     var yes = document.getElementById('yess');
     yes.remove();
    
     var no = document.getElementById('noo');
     no.remove();
    
     var northDirection = document.getElementById('north');
     northDirection.remove();
    
     var southDirection = document.getElementById('south');
     southDirection.remove();
    
     alert("Now yo can go to south only");
    
     var newSouth = document.getElementById('new-south');
     newSouth.style.visibility = 'visible';
    
     var newnorth = document.getElementById('new-north');
      newnorth.remove();
    
     var decision = document.getElementById('ready');
     document.getElementById("ready").innerHTML = ("Click to go south..."); 
    
     var back = document.getElementById('back');
     back.style.visibility = 'visible';
}

function nosouth()
{
    var yes = document.getElementById('yes-south');
     yes.remove();
    
     var no = document.getElementById('no-south');
     no.remove();
    
     var northDirection = document.getElementById('north');
     northDirection.remove();
    
     var southDirection = document.getElementById('south');
     southDirection.remove();
    
    var newDirection = document.getElementById('new-south');
     newDirection.remove();
    
     alert("Now yo can go to north only");
    
     var newSouth = document.getElementById('new-north');
     newSouth.style.visibility = 'visible';
    
     var decision = document.getElementById('ready');
     document.getElementById("ready").innerHTML = ("Click to go north..."); 
    
     var back = document.getElementById('back');
     back.style.visibility = 'visible';
}

function adventure() 
{
    var headingFour = document.getElementById('heading-four');
    var headingFive = document.getElementById('heading-five');
    var start = document.getElementById('start');
    var choose = document.getElementById('choose');
    
    headingFour.style.visibility = 'visible';
    headingFive.style.visibility = 'visible';
    start.remove();
    choose .style.visibility = 'visible';
    
     document.getElementById("journey").innerHTML = ("Your journey has been started..."); 

}

function explore()
{
    var headingFive = document.getElementById('heading-five');
    var headingSix = document.getElementById('heading-six');
    var options = document.getElementById('options');
    var line = document.getElementById('line');
    
    headingFive.style.visibility = 'visible';
    headingSix.style.visibility = 'visible';
    options.style.visibility = 'visible';
    line.style.visibility = 'visible';
}

function options()
{
    var headingThree = document.getElementById('heading-three');
    var farmer = document.getElementById('farmer');
    var cowboy = document.getElementById('cowboy');
    var back = document.getElementById('back');
    
    headingThree.style.visibility = 'visible';
    farmer.style.visibility = 'visible';
    cowboy.style.visibility = 'visible';
    back.style.visibility = 'visible';
}
function choose()
{
    var direction = document.getElementById('direction');
    var paraDirections = document.getElementById('paradirections');
    var directionButtons = document.getElementById('buttons');
    
    direction.style.visibility = 'visible';
    paraDirections.style.visibility = 'visible';
    directionButtons.style.visibility = 'visible';
    
    document.getElementById("choose").disabled = true;
    var more = document.getElementById('choose');
    more.style.opacity = '50%';
}

function decide()
{
    var headingFive = document.getElementById('heading-five');
    var headingSix = document.getElementById('heading-six');
    var become = document.getElementById('become');
    var line = document.getElementById('line');
    
    headingFive.style.visibility = 'visible';
    headingSix.style.visibility = 'visible';
    become.style.visibility = 'visible';
    line.style.visibility = 'visible';
    
    document.getElementById("decide").disabled = true;
    var more = document.getElementById('decide');
    more.style.opacity = '50%';
}

function become() 
{
     var clerkButtons = document.getElementById('clerk'); 
     var salesmanButtons = document.getElementById('salesman');   
     var serverButtons = document.getElementById('server');   
     var back = document.getElementById('back');   
     
     clerkButtons.style.visibility = 'visible';
     salesmanButtons.style.visibility = 'visible';
     serverButtons.style.visibility = 'visible';
     back.style.visibility = 'visible';
    
    document.getElementById("become").disabled = true;
    var more = document.getElementById('become');
    more.style.opacity = '50%';
}

function ChooseFriend()
{
     var friendAlex = document.getElementById('alex'); 
     var friendKevin = document.getElementById('kevin');   
     var optionSouth = document.getElementById('option');   
     
     friendAlex.style.visibility = 'visible';
     friendKevin.style.visibility = 'visible';
     optionSouth.style.visibility = 'visible';
    
     document.getElementById("choose").disabled = true;
    var more = document.getElementById('choose');
    more.style.opacity = '50%';
}


function SeeOption()
{
     var headingFive = document.getElementById('heading-six'); 
     var goSouth = document.getElementById('go-south');   
     var back = document.getElementById('back');   
     
     headingFive.style.visibility = 'visible';
     goSouth.style.visibility = 'visible';
     back.style.visibility = 'visible';
    
    document.getElementById("option").disabled = true;
    var more = document.getElementById('option');
    more.style.opacity = '50%';
}
function start()
{
    var lineOne = document.getElementById('line-one');
    var lineTwo = document.getElementById('line-two');
    var goButton = document.getElementById('go');
    
    lineOne.style.visibility = 'visible';
    lineTwo.style.visibility = 'visible';
    goButton.style.visibility = 'visible';
    
    document.getElementById("adventure").disabled = true;
    var more = document.getElementById('adventure');
    more.style.opacity = '50%';
}

function AlexNotBuild()
{
   alert("Sorry! this is not ready yet.");
  document.getElementById("alex").disabled = true;
  var more = document.getElementById('alex');
   more.style.opacity = '50%';
}

function KevinNotBuild()
{
   alert("Sorry! this is not ready yet.");
    document.getElementById("kevin").disabled = true;
  var more = document.getElementById('kevin');
   more.style.opacity = '50%';
}

function go()
{
    var lineThree = document.getElementById('line-three');
    var lineFour = document.getElementById('line-four');
    var lineFive = document.getElementById('line-five');
    var leaveButton = document.getElementById('house');
    
    lineThree.style.visibility = 'visible';
    lineFour.style.visibility = 'visible';
    lineFive.style.visibility = 'visible';
    leaveButton.style.visibility = 'visible';
    
    document.getElementById("go").disabled = true;
    var more = document.getElementById('go');
    more.style.opacity = '50%';
}
function no()
{
    alert("Click yes to continue")
}

function yes() 
{
  var houseImage = document.getElementById('home');
  var startGame = document.getElementById('start');
  var optionNo = document.getElementById('no');
  var optionYes = document.getElementById('yes');
  var headingFive = document.getElementById('h5');
  var homeImage = document.getElementById('home');
  var startAdventure = document.getElementById('start');
  var displayName = document.getElementById('name');
  var playerName = document.getElementById('player');
  var enterName = document.getElementById('entername');  
    
   
    houseImage.style.visibility = 'visible';
    startGame.style.visibility = 'visible';
    optionNo.remove(); 
    optionYes.remove(); 
    headingFive.style.visibility = 'visible';
    homeImage.style.visibility = 'visible';
    startAdventure.style.visibility = 'visible';
    displayName.remove(); 
    playerName.style.visibility = 'visible';
    enterName.remove(); 
}