/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1000, 1000);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(200, 200, 200);

var frame = 1;

frameRate(1);

draw = function() {
    // increment our frame counter. we'll need this for the glider animation
    frame++;
    for (var i = 0; i < 1000; i += 75) {
        for (var j = 0; j < 1000; j += 75) {
            fill(random(0, 255), random(0, 255), random(0, 255));
            ellipse(i, j, 50, 50);
        }
    }
    // select a random color for our glider animation
    fill(random(0, 255), random(0, 255), random(0, 255));
    if (frame % 3 == 0) {
        // glider animation
        ellipse(525, 75, 50, 50);
        ellipse(600, 150, 50, 50);
        ellipse(525, 225, 50, 50);
        ellipse(600, 225, 50, 50);
        ellipse(450, 225, 50, 50);
    }
    if (frame % 3 == 1) {
        ellipse(525, 300, 50, 50);
        ellipse(600, 150, 50, 50);
        ellipse(525, 225, 50, 50);
        ellipse(600, 225, 50, 50);
        ellipse(450 , 150, 50, 50);
    }
    if (frame % 3 == 2) {
        ellipse(525, 300, 50, 50);
        ellipse(600, 150, 50, 50);
        ellipse(600, 300, 50, 50);
        ellipse(600, 225, 50, 50);
        ellipse(450, 225, 50, 50);
    }
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
