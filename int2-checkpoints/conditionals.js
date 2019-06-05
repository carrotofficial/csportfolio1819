/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
    // clear the background
    background();
    
    // since we clear the background every tick we need to redraw it here
    fill(0, 0, 100);
    rect(200, 200, 200, 200);
    fill(0, 100, 0);
    rect(200, 0, 200, 200);
    fill(100, 0, 100);
    rect(0, 200, 200, 200);
    
    // test what region we're in
    if (mouseY < 200 && mouseX < 200) {
        fill(255, 255, 255);
    }
    if (mouseY < 200 && mouseX > 200) {
        fill(0, 100, 0);
    }
    if (mouseY > 200 && mouseX > 200) {
        fill(0, 0, 100);
    }
    if (mouseY > 200 && mouseX < 200) {
        fill(100, 0, 100);
    }
    ellipse(mouseX, mouseY, 50, 50);
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
