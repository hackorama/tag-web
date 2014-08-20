function validateAdd(theform){
	var value = theform.comment.value;
	var mark = document.getElementById('add_marker');
	var error = document.getElementById('add_error');

	if( value.length <= 0 ){
		mark.style.border = "1px solid #ff0000" ;
		theform.comment.focus();
                theform.comment.select();
		error.childNodes[0].nodeValue ="Please enter a comment...";
		error.style.color = "#ff0000" ;
		return false;
	}
	return true;
}

function validateUpdate(theform){
	var value = theform.comment.value;
	var mark = document.getElementById('update_marker');
	var error = document.getElementById('update_error');

	if( value.length <= 0 ){
		mark.style.border = "1px solid #ff0000" ;
		theform.comment.focus();
                theform.comment.select();
		error.childNodes[0].nodeValue ="Please enter comment...";
		error.style.color = "#ff0000" ;
		return false;
	}
	return true;
}

function confirmDelete(){
        if( confirm("Are you sure you want to delete this comment ?") ) {
                return true;
        }
        return false;
}

