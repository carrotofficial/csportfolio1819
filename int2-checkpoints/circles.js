/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;

draw = function() {
    // make a nice little red circle with a green border
    fill(color(255, 0, 0));
    stroke(color(0, 255, 0));
    strokeWeight(2);
    ellipse(xPos, yPos, 30, 30);
    
    xPos += 25;
    yPos += 25;
    
    // same thing but with the colors swapped
    fill(color(0, 255, 0));
    stroke(color(255, 0, 0));
    strokeWeight(2);

    ellipse(xPos + 50, yPos, 30, 30);
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
