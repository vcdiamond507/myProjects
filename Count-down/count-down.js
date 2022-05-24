

// Update the count down every 1 second
var x = setInterval(function() {

    // Set the date we're counting down to
var countDownDate = new Date("May 21, 2022 17:35:00").getTime();


  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = now - countDownDate;
 
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
    
  // Output the result in an element with id="demo"

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;


 
  
    
  // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     var imgcontainerchange = document.getElementById("img-container");
//     imgcontainerchange .classList.toggle("img-container-change");
//   }
}, 
1000);

