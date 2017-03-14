console.log("sanity check")

var symbol = document.getElementById("symbolType");
var height = document.getElementById("sliderRange");
var output = document.getElementById("heightText");

// dispaly initial height and draw pyramid
height.innerHTML = height.value;
drawPyramid(parseInt(height.value), symbol.value);

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height, symbol) {
    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    var symbol = document.getElementById("symbolType");
    var height = document.getElementById("sliderRange");

    heightText.innerHTML = height.value;

    // for each row....
    for (var row = 0; row < height.value; row++) {
        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;
        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "WORKDAMNIT"; // this is the HTML encoding for a space " " "&nbsp"
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol.value;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
