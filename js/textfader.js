/* found on http://www.pubsub.com */

var currentVal = 1;
function stepOverlay( val ) {
    currentVal = val;
    
    var vHex = String("0123456789abcdef").charAt( val ) + "f";
    var color = "#" + vHex + vHex + vHex;
    var obj = document.getElementById( "ontop" );
	
    obj.style.color = color;
	
    if( val < 15) {
	var nextVal = val + 1;
	setTimeout( "stepOverlay(" + nextVal + ")", 40 );
    } else {
	obj.innerHTML = "";
    }
}



var onloadHasFired = false;
function hideOverlay() {
    if (currentVal < 15 && onloadHasFired == true) {
	stepOverlay( currentVal + 1 );
    }
}



