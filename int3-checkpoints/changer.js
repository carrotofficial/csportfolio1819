// store our input and button in variables so we can access them with javascript
var colorinput = document.getElementById("colorInput");
var colorbutton = document.getElementById("myButton");
var imagebutton = document.getElementById("imageButton");

// activate this anonymous function when the 'change color' button is clicked
colorbutton.addEventListener("click", function(){
    // change the background color to two random colors, then the value of the input box
    setTimeout(function(){
        document.body.style.backgroundColor = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")";
    }, 250);
    setTimeout(function(){
        document.body.style.backgroundColor = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")";
    }, 500);
    setTimeout(function(){
        document.body.style.backgroundColor = colorinput.value;
    }, 750);
    //document.body.style.backgroundColor = colorinput.value;
});

imagebutton.addEventListener("click", function(){
    images = {
      cat: "url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')"  
    };
    // change the background color to two random colors, then the image value of the input box
    setTimeout(function(){
        document.body.style.backgroundColor = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")";
    }, 250);
    setTimeout(function(){
        document.body.style.backgroundColor = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")";
    }, 500);
    setTimeout(function(){
        document.body.style.backgroundImage = images[colorinput.value];
    }, 750);
});