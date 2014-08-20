
function validateNewtagForm() {
		var theform = document.getElementById("newtag");
		var msg = "Please enter a title for the tag";
		var title = theform.title.value; 
		var titlemark = document.getElementById('titlemarker');
		if( title == "" ){
			//theform.title.style.background = "#ffbbbb" ;
			titlemark.style.border = "1px solid #ff0000" ;
			document.getElementById('errormsg').childNodes[0].nodeValue = msg;
			document.getElementById('errormsg').style.color = "#ff0000" ;
			return false;
		} 
		return true;
}

function validateNewtagFormPreview(theform) {
		var msg = "Please enter a title for the tag";
		var title = theform.title.value; 
		var titlemark = document.getElementById('titlemarker');
		if( title == "" ){
			//theform.title.style.background = "#ffbbbb" ;
			titlemark.style.border = "1px solid #ff0000" ;
			document.getElementById('errormsg').childNodes[0].nodeValue = msg;
			document.getElementById('errormsg').style.color = "#ff0000" ;
			return false;
		} 
		return true;
}

function resetNewtagForm(theform) {
		if (!document.getElementById) { 
			return true; 
		}
		var msg = " ";
		var titlemark = document.getElementById('titlemarker');
		titlemark.style.border = "1px solid #ffffff" ;
		document.getElementById('errormsg').childNodes[0].nodeValue = msg;
		document.getElementById('errormsg').style.color = "#000000" ;
		return false;
}

function resetForm() {
	if (!document.getElementById) { 
		return true; 
	}
	resetNewtagForm( document.getElementById("newtag") );
	return false;
}

function preview() {
	if (document.getElementById) {
		if( ! validateNewtagFormPreview( document.getElementById("newtag")) ){ 
			return false;
		}
		var newtag_obj = document.getElementById("newtag");

		var thetitle = newtag_obj.title.value ;

		var theurl = newtag_obj.url.value ;
		var description = newtag_obj.description.value ;

		if( theurl == "" ){
			theurl = 'http://';
		}else{
			if( theurl.indexOf('http://') != 0 ){
				theurl = 'http://' + theurl;
			}
		}

		var preview = document.getElementById( "pr_tag" );

		if( thetitle == "" ) thetitle = "You did not eneter a title";
		if( description == "" ) description = "You did not eneter any description ";

		document.getElementById('pr_url').href = theurl;
		document.getElementById('pr_url').childNodes[0].nodeValue = thetitle;
		document.getElementById('pr_info').childNodes[0].nodeValue = description;
		preview.style.display = "block";

		return false;
	} else {
		return true;
	}
}

function clearvalues() {
	if (document.getElementById) {
		resetNewtagForm( document.getElementById("newtag") );
		//document.getElementById('tagtitle').childNodes[0].nodeValue = "";
		var preview = document.getElementById( "pr_tag" );

		document.getElementById('pr_url').href = "";
		document.getElementById('pr_url').childNodes[0].nodeValue = " ";
		document.getElementById('pr_info').childNodes[0].nodeValue = " ";
		preview.style.display = "none";

		return false;
	} else {
		return true;
	}
}

