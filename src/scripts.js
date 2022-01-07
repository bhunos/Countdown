
let countDownDate = new Date("Jan 10, 2022 15:37:25").getTime();


let x = setInterval(function() {


  let now = new Date().getTime();
    

  let distance = countDownDate - now;
    
  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("timer").innerHTML = days + "  :  " + hours + "  :  "
  + minutes + "  :  " + seconds;
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


let modalSubmit = document.querySelector(".butonSubmit")
modalSubmit.addEventListener("click", function() {
  document.querySelector("body").classList.toggle('active')
})