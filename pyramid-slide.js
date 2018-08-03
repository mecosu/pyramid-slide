

var heightElem = document.getElementById("height");
var brickSymbol = document.getElementById("brick-symbol");
var formElem = document.getElementById("draw-form");

// set a handler function for the form's submission event
formElem.oninput = function(event) {

    height = heightElem.value;
    brick = brickSymbol.value;
    console.log(height)
    // draw pyramid with the specified height
    drawPyramid(height);
}

formElem.onchange = function(event) {
    
    height = heightElem.value;
    brick = brickSymbol.value;
    console.log(brick)
    // draw pyramid with the specified height
    drawPyramid(height);
}

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // clears the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figures out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // builds up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
                     rowStr += brick;
              }
        //if (brick === "#") {
        //    for (var i = 0; i < numBricks; i++) {
       //         rowStr += "#";
         //   }
        //}

        //if (brickSymbol === "@") {
        //    for (var i = 0; i < numBricks; i++) {
        //        rowStr += "@";
       //     }
       // }

        //if (brickSymbol === "X") {
        //    for (var i = 0; i < numBricks; i++) {
        //        rowStr += "X";
        //    }
        //}

        //if (brickSymbol === "$") {
        //    for (var i = 0; i < numBricks; i++) {
       //         rowStr += "$";
        //    }
        //}

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
