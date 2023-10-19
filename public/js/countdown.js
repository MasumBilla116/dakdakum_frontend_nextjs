  // Set the date we're counting down to
  var countDownDate = new Date("Aug 31, 2021 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Display the result in the element with id="demo"
    
    
    
    if(days >= 10){
      document.getElementsByClassName("countdown-day").item(0).innerHTML = days + " d";
      document.getElementsByClassName("countdown-day").item(1).innerHTML = days + " d";
      document.getElementsByClassName("countdown-day").item(2).innerHTML = days + " d";
    }else{
      document.getElementsByClassName("countdown-day").item(0).innerHTML = "0"+days + " d";
      document.getElementsByClassName("countdown-day").item(1).innerHTML = "0"+days + " d";
      document.getElementsByClassName("countdown-day").item(2).innerHTML = "0"+days + " d";
    }

    if(hours >= 10){
      document.getElementsByClassName('countdown-hours').item(0).innerHTML = hours + " h";
      document.getElementsByClassName('countdown-hours').item(1).innerHTML = hours + " h";
      document.getElementsByClassName('countdown-hours').item(2).innerHTML = hours + " h";
    }else{
      document.getElementsByClassName('countdown-hours').item(0).innerHTML = "0"+hours + " h";
      document.getElementsByClassName('countdown-hours').item(1).innerHTML = "0"+hours + " h";
      document.getElementsByClassName('countdown-hours').item(2).innerHTML = "0"+hours + " h";
    }

    if(minutes >= 10){
      document.getElementsByClassName('countdown-min').item(0).innerHTML = minutes + " m";
      document.getElementsByClassName('countdown-min').item(1).innerHTML = minutes + " m";
      document.getElementsByClassName('countdown-min').item(2).innerHTML = minutes + " m";
    }else{
      document.getElementsByClassName('countdown-min').item(0).innerHTML = "0"+minutes + " m";
      document.getElementsByClassName('countdown-min').item(1).innerHTML = "0"+minutes + " m";
      document.getElementsByClassName('countdown-min').item(2).innerHTML = "0"+minutes + " m";
    }

    if(seconds >= 10){
      document.getElementsByClassName('countdown-sec').item(0).innerText = seconds + " s";
      document.getElementsByClassName('countdown-sec').item(1).innerText = seconds + " s";
      document.getElementsByClassName('countdown-sec').item(2).innerText = seconds + " s";
    }else{
      document.getElementsByClassName('countdown-sec').item(0).innerText = "0"+seconds + " s";
      document.getElementsByClassName('countdown-sec').item(1).innerText = "0"+seconds + " s";
      document.getElementsByClassName('countdown-sec').item(2).innerText = "0"+seconds + " s";
    }
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);