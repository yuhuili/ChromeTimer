window.onload = function start () {
    
    document.getElementById('description').style.visibility = "hidden";
    var userinput = document.getElementById('form1');
    userinput.elements[7].addEventListener("click", onSubmit);
    
    console.log(userinput.elements[7]);
    
}

function onSubmit (){
        console.log("hi");
        document.getElementById('form1').style.visibility = "hidden";
        var description = document.getElementById('description');
        console.log(document.getElementById('description'));
        description.style.visibility = "visible";
    
        var userinput = document.getElementById('form1');
    
        description.innerHTML = "Time Left Until " + userinput.elements[0].value;
    
        console.log(userinput);
        var deadline =  
        userinput.elements[1].value + '-' + userinput.elements[2].value + '-' + userinput.elements[3].value + ' ' + userinput.elements[4].value + ':' + userinput.elements[5].value + ":" + userinput.elements[6].value;

    
        getTimeRemaining(deadline);
        displayClock(deadline);
}

function getTimeRemaining (deadline){
    var now = new Date();
    var t = Date.parse(deadline) - Date.parse(now);
    
    var seconds = Math.floor((t/1000) % 60);
    var minutes = Math.floor((t/1000/60) % 60);
    var hours = Math.floor((t/1000/60/60)% 24);
    var days = Math. floor((t/1000/60/60/24));
    
    return{
        'total':t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function displayClock (deadline){    
    var timeinterval = setInterval (function (){
         var time = getTimeRemaining(deadline);
         var anothertimer = document.getElementById('anothertimer');
        
         document.getElementById('time').innerHTML = time.days + " Days, " + time.hours + " Hours, " + time.minutes + " Minutes, " + time.seconds + " Seconds";
        
        if (time.total <= 0){
            clearInterval(timeinterval);
            document.getElementById('form1').style.visibility="visible";
        }
    }, 1000)
}


