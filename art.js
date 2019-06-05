/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(500, 500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

// initiate isToggled and colors. we'll need it later
var isToggled = false;
var colors = [color(50, 50, 50), color(60, 60, 60)];

// return what mouseX/Y will need to be defined as for our purposes
function getMouse(posValue) {
    if (posValue < 200) {
        return posValue;
    }
    else {
        return 200;
    }
}

draw = function() {
        background();
        // outside rectangle
        fill(50, 50, 50);
        rect(0, 0, 400, 400);
        // top trapezoid
        beginShape();
        vertex(0, 0);
        for (var i=0;i<=200;i+=200){
            vertex(getMouse(mouseX) + i, getMouse(mouseY));
        }
        vertex(400, 0);
        endShape();
        // bottom trapezoid
        beginShape();
        vertex(0, 400);
        for (var i=0;i<=200;i+=200){
            vertex(getMouse(mouseX) + i, getMouse(mouseY) + 200);
        }
        vertex(400, 400);
        endShape();
        // center rectangle
        fill(60, 60, 60);
        rect(getMouse(mouseX), getMouse(mouseY), 200, 200);
};


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
