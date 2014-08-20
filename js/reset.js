function validatePass(theform) {
		var msg = "";
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
function validateUser(theform) {
	var user = theform.user.value; 
	var usermark = document.getElementById('usermarker');
	var error = document.getElementById('errormsg');
	if( user.length < 1 ){
        	theform.user.focus();
        	theform.user.select();
		error.childNodes[0].nodeValue =  "Please enter a username...";
		error.style.color = "#ff0000" ;
                usermark.style.border = "1px solid #f00" ;
		return false;
         }
	 error.childNodes[0].nodeValue =  "";
         usermark.style.border = "1px solid #000" ;
	 return true;
}
