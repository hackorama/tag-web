
var selectedicon = '0';

function show_icon (selected, i) {
	if (document.getElementById) {
		//var selected = icon;
		var tagicon = selected + ".jpg"; ;
		document.getElementById('iconedit').style.display = "block"  ;

		document.getElementById('theicon').src = "/gfx/" + tagicon  ;
		document.getElementById('did').value = i;
		document.getElementById(selected).style.border = "2px solid #ff0000"  ;
		if( selectedicon != '0' ) {
			document.getElementById(selectedicon).style.border = "2px solid #dddddd"  ;
		}
		selectedicon = selected;
		return false;
	} else {
		return true;
	}
}

function confirmDelete(){
        if( confirm("Are you sure you want to delete this icon grpahic ?") ) {
                return true;
        }
        return false;
}
