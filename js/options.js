
function notNumber(number) {
	var VALIDNUMS = "0123456789";
	var isnumber=true;
	for (i = 0; i < number.length && isnumber == true; i++) { 
		var a_char = number.charAt(i); 
		if (VALIDNUMS.indexOf(a_char) == -1) {
			isnumber = false;
		}
	}
	if( isnumber ) {  
		return false; 
	}else{
		return true;
	}
}

function validateUserPPOptForm(theform) {

		var max_length = 3;
		var error = 0;
		var pt = theform.pt.value; 
		var ps = theform.ps.value; 
		var ptmark = document.getElementById('ptmarker');
		var psmark = document.getElementById('psmarker');
		var option_error = document.getElementById('pp_errormsg');

		ptmark.style.border = "1px solid #ffffff" ;
		psmark.style.border = "1px solid #ffffff" ;
		option_error.childNodes[0].nodeValue =  " ";
		var ok = true;

		if( pt.length == 0 && ps.length == 0 ){
				theform.pt.focus();
				theform.pt.select();
				option_error.childNodes[0].nodeValue =  "No options entered to update ";
				option_error.style.color = "#ff0000" ;
				ptmark.style.border = "1px solid #ff0000" ;
	 			ok = false;
		}
		if( pt.length > max_length || pt.length <= 0 || notNumber(pt) || pt == 0){
			theform.pt.focus();
			theform.pt.select();
			option_error.childNodes[0].nodeValue =  "Pleas enter a valid number (1 to 999)  for tag info..";
			option_error.style.color = "#ff0000" ;
			ptmark.style.border = "1px solid #ff0000" ;
 			ok = false;
		}
		if( ps.length > max_length || ps.length <= 0 ||  notNumber(ps) || ps == 0){
			theform.ps.focus();
			theform.ps.select();
			if ( ok ) {
				option_error.childNodes[0].nodeValue =  "Please enter a valid number (1 to 999) for tag stats...";
			} else { 
				option_error.childNodes[0].nodeValue =  "Please enter a valid number (1 to 999) for tag info...";
			}
			option_error.style.color = "#ff0000" ;
			psmark.style.border = "1px solid #ff0000" ;
 			ok = false;
		}
		return ok;
}


function validatePass(theform) {
		var msg = "* All are required fields";
		var pass1 = theform.pass1.value; 
		var pass2 = theform.pass2.value; 
		var pass1mark = document.getElementById('pass1marker');
		var pass2mark = document.getElementById('pass2marker');
		var error = document.getElementById('errormsg');
		pass1mark.style.border = "1px solid #ffffff" ;
		pass2mark.style.border = "1px solid #ffffff" ;
		if ( pass1 == "" ){
			theform.pass1.focus();
			theform.pass1.select();
			msg = "* Please eneter a password...";
			pass1mark.style.border = "1px solid #ff0000" ;
		} else if ( pass2 == "" ){
			msg = "* Please eneter a password...";
			pass2mark.style.border = "1px solid #ff0000" ;
			theform.pass2.focus();
			theform.pass2.select();
		} else if ( pass1 == pass2 ){
			if( pass1.length < 6 ){
				theform.pass1.focus();
				theform.pass1.select();
				msg = "* The password needs 6 charecters...";
				pass1mark.style.border = "1px solid #ff0000" ;
				pass2mark.style.border = "1px solid #ff0000" ;
			}else {
				return true;
			}
		} else {
			if( pass1.length < 6 || pass2.length < 6 ){
				msg = "* The passwords does not match and are less than 6 characters...";
			} else {
				msg = "* The passwords entered does not match...";
			}
			theform.pass1.focus();
			theform.pass1.select();
			pass1mark.style.border = "1px solid #ff0000" ;
			pass2mark.style.border = "1px solid #ff0000" ;
		}
		error.childNodes[0].nodeValue = msg; 
		error.style.color = "#ff0000" ;
		return false;
}
