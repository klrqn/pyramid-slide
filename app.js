console.log("sanity check")

var selectID = document.getElementById("selectID");
var symbolValue = selectID.options[selectID.selectedIndex].value;

var heightElem = document.getElementById("pyramidRange").value;


console.log(symbolValue);
console.log(heightElem);


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(heightElem) {
    // first, clear the old content
    document.getElementById("output").innerHTML = "";

    // for each row....
    for (var row = 0; row < heightElem; row++) {
        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = heightElem - row - 1;
        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbolValue;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("output").appendChild(rowElem);
    }
}




// function myFunction() {
//     var x = document.getElementById("mySelect").value;
//     document.getElementById("demo").innerHTML = "You selected: " + x;
// }
