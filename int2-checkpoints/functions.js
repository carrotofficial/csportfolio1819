/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1000, 1000);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
mouseClicked = function() {
    fill(random(0, 255), random(0, 255), random(0, 255));
    rect(mouseX - 100, mouseY - 100, 100, 100);
    rect(mouseX - 50, mouseY - 50, 150, 150);
}

draw = function() {

};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
