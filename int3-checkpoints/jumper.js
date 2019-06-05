// store the button for future access
var button = document.getElementById("annoyingbutton");
var audio = document.getElementsByTagName("audio")[0];
var image = document.getElementById("image");

// this activates if the button is moused over
button.addEventListener("mouseover", function(){
    // move the button to a random position
    button.style.top = Math.random() * 95 + "%";
    button.style.left = Math.random() * 100 + "%";
    audio.src = "assets/bruh.mp3";
    audio.play();
});

// when the button is actually clicked
button.addEventListener("click", function(){
    alert("congratulations!");
    alert("you figured out how to click the button!");
    alert("now...");
    alert("prepare to have an EPIC time!");
    // hide the button
    button.style.visibility = "hidden";
    image.style.visibility = "visible";
    audio.src = "assets/Bruhlovania.mp3";
    audio.play();
    /*setTimeout(function(){
        
    }, 5000);*/
});