

var heightElem = document.getElementById("height");
var brickSymbol = document.getElementById("brick-symbol");
var formElem = document.getElementById("draw-form");

formElem.oninput = function(event) {

    // when height changed, redraws pyramid
    // with the specified height and brick symbol
    height = heightElem.value;
    brick = brickSymbol.value;
    console.log(height)
    displayHeight(height);
    drawPyramid(height);
}

formElem.onchange = function(event) {

    // when brick symbol changed, redraws pyramid
    // with the specified height and brick symbol
    height = heightElem.value;
    brick = brickSymbol.value;
    console.log(brick)
    drawPyramid(height);
}

function displayHeight(height) {
    height = heightElem.value;
    document.querySelector(".display-height").innerHTML = height;
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

        // makes a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
