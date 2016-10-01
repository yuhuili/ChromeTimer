$(function() {
  document.getElementById('description').style.visibility = "hidden";
  $("#datepicker").datepicker();
  $("#submitForm").click(onSubmit);
});

function onSubmit() {
  document.getElementById('form1').style.visibility = "hidden";
  var description = document.getElementById('description');
  description.style.visibility = "visible";

  var userinput = document.getElementById('form1');

  description.innerHTML = "Time Left Until " + userinput.elements[0].value;

  var deadline = new Date(Date.parse($("#datepicker").datepicker("getDate")));
  deadline.setHours($('[name="deadline_hour"]').val());
  deadline.setMinutes($('[name="deadline_minute"]').val());
  deadline.setSeconds($('[name="deadline_second"]').val());

  getTimeRemaining(deadline);
  displayClock(deadline);
}

function getTimeRemaining(deadline) {
  var now = new Date();
  var t = deadline - Date.parse(now);

  var seconds = Math.floor((t/1000) % 60);
  var minutes = Math.floor((t/1000/60) % 60);
  var hours = Math.floor((t/1000/60/60)% 24);
  var days = Math.floor((t/1000/60/60/24));

  return {
      'total':t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
  }
}

function displayClock(deadline) {
  var timeinterval = setInterval(function(){
    var time = getTimeRemaining(deadline);
    var anothertimer = document.getElementById('anothertimer');

    document.getElementById('time').innerHTML = time.days + " Days, " + time.hours + " Hours, " + time.minutes + " Minutes, " + time.seconds + " Seconds";

    if (time.total <= 0) {
      clearInterval(timeinterval);
      document.getElementById('form1').style.visibility="visible";
    }
  }, 1000)
}
